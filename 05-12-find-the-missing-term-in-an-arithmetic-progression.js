const findMissing = (array) => {
  const delta = (array[array.length - 1] - array[0]) / array.length;
  return array.find((item, i) => array[i + 1] - delta !== item) + delta;
};
