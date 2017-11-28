const narcissistic = (value) => {
  const array = String(value).split('').map(v => Number(v));

  const result = array.reduce((res, num) => res + Math.pow(num, array.length), 0);
  return result === value;
};
