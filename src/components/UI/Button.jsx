import React from "react";

function Button({ children, type, onClick, className }) {
  return (
    <button
      className={`button ${className}`}
      type={type || "button"}
      onClick={onClick || null}
    >
      {children}
    </button>
  );
}

export default Button;
