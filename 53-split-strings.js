// Complete the solution so that it splits the string into pairs of two characters.
//  If the string contains an odd number of characters then it should replace the missing second character
//   of the final pair with an underscore ('_').

const solution = (str) => {
  const string = str.length % 2 === 1 ? `${str}_` : str;
  const result = [];
  for (let i = 0; i < string.length; i +=2) {
    result.push(string.substr(i, 2));
  }
  return result;
};
