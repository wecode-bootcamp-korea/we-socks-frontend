import React from "react";
import "./Button.scss";

function Button(props) {
  const { className, onClick, text, name, style } = props;
  return (
    <>
      <button className={className} onClick={onClick} name={name} style={style}>
        {text}
      </button>
    </>
  );
}

export default Button;
