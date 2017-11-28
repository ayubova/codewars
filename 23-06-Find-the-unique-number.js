const findUniq = (arr) => {
  const sorted = arr.sort();
  return sorted[0] === sorted[1] ? sorted[sorted.length - 1] : sorted[0];
};
