const newCode = symbol => (symbol.charCodeAt() > 109 || (symbol.charCodeAt() > 77 && symbol.charCodeAt() < 90) ? symbol.charCodeAt() - 13 : symbol.charCodeAt() + 13);

const rot13 = message => message.split('').reduce((result, letter, i) => (/[a-zA-Z]/.test(letter) ? result + String.fromCodePoint(newCode(letter)) : result + letter), '');

