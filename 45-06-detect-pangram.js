// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


const isPangram = (string) => {
  return string.toLowerCase().split('').filter(v => /[a-z]/.test(v)).
  sort().reduce((acc, v) => acc.includes(v) ? acc : [...acc, v], []).length === 26
};