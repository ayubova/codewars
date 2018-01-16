// We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:

function createFunctions(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(() => i);
  }
  return result;
}
