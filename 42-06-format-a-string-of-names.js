const list = (names) => {
  if (names.length === 0) {
    return '';
  }
  if (names.length === 1) {
    return names[0].name;
  }
  if (names.length === 2) {
    return `${names[0].name} & ${names[1].name}`;
  }
  return `${names.slice(0, -1).map(v => v.name).join(', ')} & ${names[names.length - 1].name}`;
};
