const findChildren = str => str.toLowerCase().split('').sort().reduce((res, letter) =>
  (!res.toLowerCase().includes(letter) ? res + letter.toUpperCase() : res + letter), '');
