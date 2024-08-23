import { initialColors } from "./lib/colors";
import ColorCard from "./Components/Color/ColorCard";
import "./App.css";
import ColorForm from "./Components/ColorForm";
import { nanoid } from "nanoid";
import { initialThemes } from "./lib/themes";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

  const [selectedThemeId, setSelectedThemeId] = useState(initialThemes[0].id);
  const [isEditing, setIsEditing] = useState(false);
  const [newTheme, setNewTheme] = useState("");

  function handleAddColor(newColor) {
    const colorWithId = { ...newColor, id: nanoid() };
    setColors([colorWithId, ...colors]);
  }

  function handleDeleteColor(id) {
    const filteredColors = colors.filter((color) => color.id !== id);
    setColors(filteredColors);
  }

  function handleUpdateColor(updatedColor) {
    const updatedColors = colors.map((color) =>
      color.id === updatedColor.id ? updatedColor : color
    );
    setColors(updatedColors);
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
                <ColorCard
                  color={color}
                  onDeleteColor={handleDeleteColor}
                  onUpdateColor={handleUpdateColor}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default App;
