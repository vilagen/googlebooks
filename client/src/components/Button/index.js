import React from "react";

function Button({ props, color = "default", className, onClick, text }) {
    return (
      <button onClick={onClick} {...props} className={[`btn btn-${color}`, 'm-1', className].join(" ")} type="button">
        {text}
      </button>
    );
  }
  
export default Button;
