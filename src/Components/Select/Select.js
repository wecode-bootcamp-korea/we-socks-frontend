import React from "react";
import "./select.scss";
import Option from "../Option";

const Select = props => {
  const { className, ref_array, name, placeholder, makeSelection } = props;
  return (
    <div className="root_datalist">
      <select
        className={className}
        name={name}
        placeholder={placeholder}
        onChange={makeSelection}
      >
        {ref_array.map((el, idx) => (
          <Option innerHTML={el} key={`${name}-${idx}`} value={el} />
        ))}
      </select>
    </div>
  );
};

export default Select;
