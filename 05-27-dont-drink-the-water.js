// Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density.
//  (Lower density floats to the top) The width of the glass will not change from top to bottom.

const density = {
  H: 1.36,
  W: 1.00,
  A: 0.87,
  O: 0.80,
};

const separateLiquids = (glass) => {
  const sortedArray = glass.reduce((acc, v) => acc.concat(v), []).sort((a, b) => density[a] - density[b]);
  return sortedArray.reduce((res, value, i) => ((i + 1) % glass[0].length === 0 ? [...res, sortedArray.slice(i - glass[0].length + 1, i + 1)]: res), []);
};

