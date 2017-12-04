const findOutlier = (integers) => {
  const odd = integers.filter(v => Math.abs(v) % 2 === 1);
  return integers.find(e => Math.abs(e) % 2 === (odd.length === 1 ? 1 : 0));
};
