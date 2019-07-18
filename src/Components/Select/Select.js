import React from "react";
import "./select.scss";

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
        <option key={`${name}-${idx}`} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
};

export default Select;
