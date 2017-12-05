const toWeirdCase = (string) => {
  const modifyWord = word => word.split('').map((v, i) => (i % 2 === 1 ? v.toLowerCase() : v.toUpperCase())).join('');
  return string.split(' ').map(c => modifyWord(c)).join(' ');
};
