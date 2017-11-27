const countConsonants = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.toLowerCase().split('')
  .filter(letter => !vowels.includes(letter) && /[a-z]/.test(letter))
  .reduce((res, elem) => (res.includes(elem) ? res : [...res, elem]), []).length;
};

