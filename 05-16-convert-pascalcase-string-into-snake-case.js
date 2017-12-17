const toUnderscore = str => String(str).split('')
  .reduce((res, value, i) => ((value === value.toUpperCase()) && (/[a-zA-Z]/.test(value)) && i ? `${res}_${value.toLowerCase()}` : res + value.toLowerCase()), '');

