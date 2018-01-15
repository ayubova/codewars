const bandNameGenerator = str => (str[0] !== str[str.length - 1]? `The ${str[0].toUpperCase()}${str.slice(1)}`:
  `${str[0].toUpperCase()}${str.slice(1, str.length - 1)}${str}`);
