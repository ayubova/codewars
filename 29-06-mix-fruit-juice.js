const mixFruit = (arr) => {
  const regular = ['banana', 'orange', 'apple', 'lemon', 'grapes'];
  const special = ['avocado', 'strawberry', 'mango'];

  return Math.round(arr.reduce((sum, value) => {
    if (regular.includes(value.toLowerCase())) {
      return sum + 5;
    }
    if (special.includes(value.toLowerCase())) {
      return sum + 7;
    }

    return sum + 9;
  }, 0) / arr.length);
};
