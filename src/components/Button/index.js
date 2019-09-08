import React from "react";

function Button({props, className, children }) {
    return (
      <button {...props} className={["btn btn-primary", 'm-3', className].join(" ")}>
        {children}
      </button>
    );
  }
  
export default Button;
