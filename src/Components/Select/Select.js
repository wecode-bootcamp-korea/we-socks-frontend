import React from "react";
import "./select.scss";
import Option from "../Option";

const Select = props => {
  const { className, ref_array, name, placeholder, makeSelection } = props;
  return (
    <select
      className={className}
      name={name}
      placeholder={placeholder}
      onChange={makeSelection}
      value={props.value}
    >
      {ref_array.map((el, idx) => (
        <Option key={`${name}-${idx}`} value={el}>
          {el}
        </Option>
      ))}
    </select>
  );
};

export default Select;
