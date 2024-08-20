import { useState } from "react";

export default function ColorInput({ id, defaultValue, name, onChange }) {
  const [inputValue, setInputValue] = useState(defaultValue);

  function handleInput(event) {
    setInputValue(event.target.value);
    onChange(event);
  }

  return (
    <div>
      <input
        type="text"
        id={id}
        name={name}
        value={inputValue}
        onChange={handleInput}
      />
      <input
        type="color"
        id={`${id}-color`}
        name={name}
        value={inputValue}
        onChange={handleInput}
      />
    </div>
  );
}
