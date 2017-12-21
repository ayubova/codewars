const prefill = (times, value) => {
  const iter = (count, acc) => {
    if (typeof count === 'boolean' || ~~count != count || +count < 0) throw new TypeError(`${count} is invalid`);

    if (count === 0) {
      return acc;
    }
    return iter(count - 1, [...acc, value]);
  };
  return iter(times, []);
};

// function prefill(num, value) {
//     if(typeof num === 'boolean' || ~~num != num || +num < 0) throw new TypeError(num + ' is invalid')
//     return Array.apply(null, Array(+num)).map(function (d,i) { return value })
//   }
