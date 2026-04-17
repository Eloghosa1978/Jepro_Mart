import React, { useEffect } from "react";
import "../../theme/CSS/ErrorModal.css";
import { createPortal } from "react-dom";

const ErrorModal = ({  message, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return createPortal(
    <div className="error-modal-container" onClick={onClose}>
      <div
        className="error-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="error-title"
        aria-describedby="error-body"
        tabIndex="-1"
      >
        <header className="errror-header">
          <div className="error-icon">
            <h2 className="icon">!</h2>
          </div>
          <h2 className="error-title">Error</h2>
        </header>
        <div className="error-body">
          <p>{message}</p>
        </div>
        <footer className="error-footer">
          <button
            className="close-btn"
            onClick={onClose}
            aria-label="Close error modal"
          >
            Close
          </button>
        </footer>
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
};

export default ErrorModal;
