/* Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order. */

function comp(array1, array2) {
  if (!array1 || !array2) {
    return false;
  }
  const first = array1.slice().map(e => e * e).sort((a, b) => a - b).join('');
  const second = array2.slice().sort((a, b) => a - b).join('');
  return first === second;
}
