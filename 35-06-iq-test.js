const iqTest = (numbers) => {
  const arr = numbers.split(' ');
  const even = arr.filter(e => e % 2 === 0);
  const odd = arr.filter(e => e % 2 !== 0);
  return (even.length === 1 ? arr.indexOf(even[0]) : arr.indexOf(odd[0])) + 1;
};
