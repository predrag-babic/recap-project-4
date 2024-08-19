import { useState } from "react";
import "./Color.css";

export default function Color({ color, onDeleteColor }) {
  const [showConfirmText, setShowConfirmText] = useState(false);

  function handleDeleteColor() {
    setShowConfirmText(true);
  }

  function handleConfirmDelete() {
    onDeleteColor(color.id);
  }

  function handleCancelDelete() {
    setShowConfirmText(false);
  }
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline ">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast Text: {color.contrastText}</p>
      {showConfirmText ? (
        <div>
          <p className="color-card-highlight">
            Are you sure you want do delete this color?
          </p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      ) : (
        <button onClick={handleDeleteColor}>Delete</button>
      )}
    </div>
  );
}
