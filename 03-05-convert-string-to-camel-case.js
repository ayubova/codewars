const toCamelCase = (str) => {
  const array = str.split(/[-_]/);

  return array[0] + array.slice(1).map(v => v[0].toUpperCase() + v.slice(1)).join('');
};
