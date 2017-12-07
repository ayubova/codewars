const count = string => string.split('').reduce((acc, value) => ({ ...acc, [value]: acc[value] ? acc[value] + 1 : 1 }), {});

