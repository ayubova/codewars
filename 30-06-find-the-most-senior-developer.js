const findSenior = (arr) => {
  const maxAge = arr.slice().sort((a, b) => b.age - a.age)[0].age;
  return arr.filter(e => e.age === maxAge);
};
