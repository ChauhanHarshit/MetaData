import React from "react";

function TouchBox({ text, onClick, isActive }) {
  return (
    <div
      className="dull-box"
      onClick={onClick}  
      style={{
        height: 40,
        padding: 16,
        background: isActive ? "" : "transparent",
      }}
    >
      {text}
    </div>
  );
}

export default TouchBox;
