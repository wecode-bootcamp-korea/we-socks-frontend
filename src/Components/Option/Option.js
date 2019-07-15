import React from "react";

const Option = props => {
  const { value, innerHtml } = props;
  return <option value={value}>{props.innerHTML}</option>;
};

export default Option;
