import { useState } from "react";

export default function ColorInput({ id, defaultValue }) {
  const [inputValue, setInputValue] = useState(defaultValue);

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        id={id}
        name={id}
        value={inputValue}
        onChange={handleInput}
      />
      <input
        type="color"
        id={`${id}-color`}
        name={id}
        value={inputValue}
        onChange={handleInput}
      />
    </div>
  );
}
