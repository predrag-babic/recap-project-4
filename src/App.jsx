import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm";
import { nanoid } from "nanoid";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    const colorWithId = { ...newColor, id: nanoid() };
    setColors([colorWithId, ...colors]);
  }

  function handleDeleteColor(id) {
    const filteredColors = colors.filter((color) => color.id !== id);
    setColors(filteredColors);
  }
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.length === 0 ? (
        <p>No colors.. start by adding one!</p>
      ) : (
        <ul>
          {colors.map((color) => {
            return (
              <li key={color.id}>
                <Color color={color} onDeleteColor={handleDeleteColor} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default App;
