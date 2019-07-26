const AddCommaToNumber = number => {
  let string = String(number);
  return string.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const SliceThenAddComma = number => {
  let string = String(number);
  string = string.slice(0, string.length - 3);
  return string.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export { AddCommaToNumber, SliceThenAddComma };
