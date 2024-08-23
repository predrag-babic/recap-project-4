//import { initialColors } from "./lib/colors";
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

  const selectedTheme = themes.find((theme) => theme.id === selectedThemeId);

  function handleAddColor(newColor) {
    const colorWithId = { ...newColor, id: nanoid() };
    const updatedThemes = themes.map((theme) =>
      theme.id === selectedThemeId
        ? { ...theme, colors: [colorWithId, ...theme.colors] }
        : theme
    );
    setThemes(updatedThemes);
  }

  function handleDeleteColor(colorId) {
    const updatedThemes = themes.map((theme) =>
      theme.id === selectedTheme.id
        ? {
            ...theme,
            colors: theme.colors.filter((color) => color.id !== colorId),
          }
        : theme
    );
    setThemes(updatedThemes);
  }

  function handleUpdateColor(updatedColor) {
    const updatedThemes = themes.map((theme) =>
      theme.id === selectedThemeId
        ? {
            ...theme,
            colors: theme.colors.map((color) =>
              color.id === updatedColor.id ? updatedColor : color
            ),
          }
        : theme
    );
    setThemes(updatedThemes);
  }

  function handleAddTheme() {
    const newTheme = {
      id: nanoid(),
      name: `New Theme ${themes.length + 1}`,
      colors: [],
    };
    setThemes([newTheme, ...themes]);
    setSelectedThemeId(newTheme.id);
  }

  function handleDeleteTheme(themeId) {
    if (themeId === "t1") return;
    const updatedThemes = themes.filter((theme) => theme.id !== themeId);
    setThemes(updatedThemes);
    setSelectedThemeId(updatedThemes[0].id);
  }

  function handleRenameTheme() {
    const updatedThemes = themes.map((theme) =>
      theme.id === selectedThemeId ? { ...theme, name: newTheme } : theme
    );
    setThemes(updatedThemes);
    setIsEditing(false);
  }

  function handleSelectTheme(event) {
    setSelectedThemeId(event.target.value);
  }

  function handleEditingTheme() {
    setNewTheme(selectedTheme.name);
    setIsEditing(true);
  }

  function handleCancelEditing() {
    setIsEditing(false);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <div>
        <select value={selectedThemeId} onChange={handleSelectTheme}>
          {themes.map((theme) => (
            <option key={theme.id} value={theme.id}>
              {theme.name}
            </option>
          ))}
        </select>
        <button onClick={handleAddTheme}>ADD</button>
        {selectedThemeId !== "t1" && (
          <>
            <button onClick={() => handleDeleteTheme(selectedThemeId)}>
              DELETE
            </button>

            {isEditing ? (
              <>
                <input
                  type="text"
                  value={newTheme}
                  onChange={(event) => setNewTheme(event.target.value)}
                />
                <button onClick={handleRenameTheme}>Update</button>
                <button onClick={handleCancelEditing}>Cancel</button>
              </>
            ) : (
              <button onClick={handleEditingTheme}>EDIT</button>
            )}
          </>
        )}
      </div>

      <ColorForm onSubmitColor={handleAddColor} />
      {selectedTheme.colors.length === 0 ? (
        <p>No colors.. start by adding one!</p>
      ) : (
        <ul>
          {selectedTheme.colors.map((color) => {
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
