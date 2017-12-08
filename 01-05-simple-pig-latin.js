// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

const pigIt = str => str.split(' ').map(word => `${word.slice(1)}${word[0]}ay`).join(' ');
