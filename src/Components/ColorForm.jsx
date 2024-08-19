import "./ColorForm.css";
import ColorInput from "./ColorInput";

export default function ColorForm({
  onSubmitColor,
  startData = {
    role: "some color",
    hex: "#000000",
    contrastText: "#ffffff",
  },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitColor(data);
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role" className="role-label">
        Role
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={startData.role}
        />
      </label>
      <label htmlFor="hex">
        {" "}
        Hex
        <ColorInput id="hex" name="hex" defaultValue={startData.hex} />
      </label>
      <label htmlFor="contrast-text">
        Contrast Text
        <ColorInput
          id="contrast-text"
          name="contrast-text"
          defaultValue={startData.contrastText}
        />
      </label>
      <button type="submit">ADD COLOR</button>
    </form>
  );
}
