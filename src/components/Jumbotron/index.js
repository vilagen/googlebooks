import React from "react";

function Jumbotron({ props, children }) {
    return (
        <div
            className={`jumbotron`}
        >
            {children}
        </div>
    )
}

export default Jumbotron