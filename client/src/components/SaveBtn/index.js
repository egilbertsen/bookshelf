import React from "react";
import { BsBookmarkPlus } from "react-icons/bs";
import "./style.css";

function SaveBtn(props) {
  return (
    <span className="save-btn" {...props} role="button" tabIndex="0">
      <BsBookmarkPlus className="saveIcon"></BsBookmarkPlus>
    </span>
  );
}

export default SaveBtn;
