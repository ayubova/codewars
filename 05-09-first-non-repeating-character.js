// Write a function named firstNonRepeatingLetter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return the empty string ("").

function firstNonRepeatingLetter(s) {
  const arr = s.toLowerCase().split('');
  const indexOfLetter = arr.findIndex((item, index) => !arr.slice(index + 1).includes(item) && (!arr.slice(0, index).includes(item)));
  return indexOfLetter > -1 ? s[indexOfLetter] : '';
}
