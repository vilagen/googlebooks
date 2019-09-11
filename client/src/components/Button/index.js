import React from "react";

function Button({ props, type = "default", className, children, onClick, text }) {
    return (
      <button onClick={onClick} {...props} className={[`btn btn-${type}`, 'm-1', className].join(" ")}>
        {text}
      </button>
    );
  }
  
export default Button;
