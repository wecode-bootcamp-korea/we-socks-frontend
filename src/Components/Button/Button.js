import React from "react";
import "./Button.scss";

function Button(props) {
  const { className, onClick, text, name } = props;
  return (
    <>
      <button className={className} onClick={onClick} name={name}>
        {text}
      </button>
    </>
  );
}

export default Button;
