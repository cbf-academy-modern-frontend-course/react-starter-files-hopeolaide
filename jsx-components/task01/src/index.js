import React from "react";
import ReactDOM from "react-dom/client";

const name = "Hope";

function Profile(name) {
    if (/name/i) {
        return (
            <main id="content" role="main" className="base">
                <h1>{name}'s React Page</h1>
                <p>Example of react JSX in action</p>
            </main>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Profile(name));

// The syntax /learn react/i is special
// syntax called a regular expression.
// The ‘i’ signifies that the text ‘learn react’
// can be upper or lower case
