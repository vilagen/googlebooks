import React from "react";

function Jumbotron({children }) {
    return (
        <div
            className={`jumbotron col-md-6 mx-auto`}
        >
            {children}
        </div>
    )
}

export default Jumbotron