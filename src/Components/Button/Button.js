import React from "react";
import "./button.scss";

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
