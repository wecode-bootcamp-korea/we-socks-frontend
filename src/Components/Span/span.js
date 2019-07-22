import React from "react";
import "./span.scss";

const Span = ({ onClick, name, style }) => {
  return (
    <span
      className="patternPicker"
      name={name}
      onClick={onClick}
      style={style}
    ></span>
  );
};

export default Span;
