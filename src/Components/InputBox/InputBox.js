import React from "react";

function InputBox(props) {
  const { className, onChange, name, type, placeholder, value, list } = props;

  return (
    <input
      className={className}
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      list={list}
    />
  );
}

export default InputBox;
