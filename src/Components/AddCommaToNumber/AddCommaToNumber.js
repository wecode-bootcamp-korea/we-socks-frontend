const AddCommaToNumber = number => {
  let string = String(number);
  let str = string.slice(0, string.length - 3);

  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default AddCommaToNumber;
