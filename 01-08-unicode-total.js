/* You'll be given a string, and have to return the total of all the unicode characters as an int.
  Should be able to handle any characters sent at it.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291 */

const uniTotal = (string) => {
  let result = 0;
  for (let i = 0; i < string.length; i++) {
    result += string.charCodeAt(i);
  }
  return result;
};
// total up dem unicodes!
