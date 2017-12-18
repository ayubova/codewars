function validBraces(str) {
  let prev = '';
  while (str.length != prev.length) {
    prev = str;
    str = str
      .replace('()', '')
      .replace('[]', '')
      .replace('{}', '');
  }
  return (str.length === 0);
}
