import React from "react";

const AddCommaToNumber = number => {
  const string = String(number);

  return string.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default AddCommaToNumber;
