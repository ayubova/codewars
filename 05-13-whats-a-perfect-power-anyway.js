const isPP = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let k = 1; Math.pow(i, k) <= n; k++) {
      if (Math.pow(i, k) === n) {
        return [i, k];
      }
    }
  }
  return null;
};
