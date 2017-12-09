function anagrams(word, words) {
  const isAnagram = string => string.split('').every(letter => word.includes(letter)) && word.split('').every(l => string.includes(l)) && word.length === string.length;

  return words.filter(value => isAnagram(value));
}
