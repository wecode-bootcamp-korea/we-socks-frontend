import React from "react";
import "./Button.scss";

function Button(props) {
  const { className, click, text } = props;
  return (
    <>
      <button className={className} onClick={click}>
        {text}
      </button>
    </>
  );
}

export default Button;
