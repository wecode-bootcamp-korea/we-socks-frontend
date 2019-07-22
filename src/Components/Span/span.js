import React from "react";
import "./span.scss";

const Span = ({ onClick, name, style, className }) => {
  return (
    <span
      className={className}
      name={name}
      onClick={onClick}
      style={style}
    ></span>
  );
};

export default Span;
