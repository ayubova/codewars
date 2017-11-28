const kebabize = str => str.split('').filter((e => /[a-zA-Z]/.test(e))).reduce((res, v, i) => {
  if (v === v.toUpperCase()) {
    if (i === 0) {
      return res + v.toLowerCase();
    }
    return `${res}-${v.toLowerCase()}`;
  }
  return res + v;
}, '');
