import React from "react";
import "./InputBox.scss";

function InputBox(props) {
  const {
    className,
    handleChange,
    name,
    type,
    placeholder,
    value,
    list
  } = props;

  return (
    <>
      <input
        className={className}
        onChange={handleChange}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        list={list}
      />
    </>
  );
}

export default InputBox;
