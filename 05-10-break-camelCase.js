// Complete the solution so that the function will break up camel casing, using a space between words.

const solution = string => string.split('').reduce((result, item) => (item === item.toUpperCase() ? `${result} ${item}` : result + item), '');

