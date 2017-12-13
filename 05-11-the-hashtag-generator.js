function generateHashtag(str) {
  if (str === '') {
    return false;
  }
  const modifiedString = str.split(' ').filter(v => /[a-zA-Z]/.test(v)).map(item => item[0].toUpperCase() + item.slice(1)).join('');
  return modifiedString.length > 140 ? false : `#${modifiedString}`;
}
