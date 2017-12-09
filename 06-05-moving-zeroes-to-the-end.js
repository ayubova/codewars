const moveZeros = arr => arr.reverse().reduce((res, v) => (v === 0 ? [...res, 0] : [v, ...res]), []);

