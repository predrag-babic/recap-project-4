import "./ColorForm.css";
import ColorInput from "./ColorInput";
import { useState } from "react";

export default function ColorForm({
  onSubmitColor,
  startData = {
    role: "some color",
    hex: "#000000",
    contrastText: "#ffffff",
  },
  onCancel,
  buttonText = "ADD COLOR",
}) {
  const [formValues, setFormValues] = useState(startData);
  function handleSubmit(event) {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);
    onSubmitColor(formValues);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role" className="role-label">
        Role
        <input
          type="text"
          id="role"
          name="role"
          value={formValues.role}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="hex">
        {" "}
        Hex
        <ColorInput
          id="hex"
          name="hex"
          defaultValue={formValues.hex}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="contrast-text">
        Contrast Text
        <ColorInput
          id="contrast-text"
          name="contrastText"
          defaultValue={formValues.contrastText}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">{buttonText}</button>
      {onCancel && (
        <button type="button" onClick={onCancel}>
          CANCEL
        </button>
      )}
    </form>
  );
}
