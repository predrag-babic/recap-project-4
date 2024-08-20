import { useState } from "react";
import "./Color.css";
import ColorForm from "../ColorForm";
import CopyToClipboard from "../CopyToClipboard";

export default function Color({ color, onDeleteColor, onUpdateColor }) {
  const [showConfirmText, setShowConfirmText] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function handleDeleteColor() {
    setShowConfirmText(true);
  }

  function handleConfirmDelete() {
    onDeleteColor(color.id);
  }

  function handleCancelDelete() {
    setShowConfirmText(false);
  }

  function handleEditColor() {
    setIsEditing(true);
  }

  function handleUpdateColor(updatedColor) {
    onUpdateColor({ ...updatedColor, id: color.id });
    setIsEditing(false);
  }

  function handleCancelEditing() {
    setIsEditing(false);
  }
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      {isEditing ? (
        <ColorForm
          onSubmitColor={handleUpdateColor}
          startData={color}
          buttonText="UPDATE COLOR"
          onCancel={handleCancelEditing}
        />
      ) : (
        <>
          <div className="color-card-header">
            <h3 className="color-card-headline ">{color.hex}</h3>
            <CopyToClipboard hex={color.hex} />
          </div>
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
            <>
              <button onClick={handleDeleteColor}>Delete</button>
              <button onClick={handleEditColor}>Edit</button>
            </>
          )}
        </>
      )}
    </div>
  );
}
