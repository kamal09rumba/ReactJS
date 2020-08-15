import React, { useState } from "react";
import Modal from "./Modal";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button onClick={() => setIsOpen(true)}>Open Model</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Modal Content
        </Modal>
      </div>
      <div style={OTHER_CONTENT_STYLES}>Other content</div>
    </>
  );
}
