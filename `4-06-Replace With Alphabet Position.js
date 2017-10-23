/* In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

a being 1, b being 2, etc. */

const alphabetPosition = text => text.split('').filter(e => /^[A-Za-z]*$/.test(e)).map(value => value.toLowerCase().charCodeAt(0) - 96).join(' ');
