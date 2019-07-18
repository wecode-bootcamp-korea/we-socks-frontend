import React from "react";
import "./button.scss";

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
