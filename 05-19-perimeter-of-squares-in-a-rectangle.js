function perimeter(n) {
  let a = 1;
  let b = 1;
  let sum = 2;
  for (let i = 1; i < n; i++) {
    const c = a + b;
    sum += c;
    a = b;
    b = c;
  }
  return sum * 4;
}
