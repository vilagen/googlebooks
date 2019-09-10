import React from "react";

function Button({ type = "default", className, children, onClick }) {
    return (
      <button onClick={onClick} className={[`btn btn-${type}`, 'm-3', className].join(" ")}>
        {children}
      </button>
    );
  }
  
export default Button;
