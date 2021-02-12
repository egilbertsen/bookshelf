import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ paddingTop: "30px", paddingBottom: "30px", clear: "both", textAlign: "center", backgroundColor: "none"}}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
