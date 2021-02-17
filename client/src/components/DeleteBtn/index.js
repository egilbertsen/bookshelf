import React from "react";
import "./style.css";

function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      (Remove Book from Shelf)
    </span>
  );
}

export default DeleteBtn;
