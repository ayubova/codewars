/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to it's position in the alphabet:
a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */

function high(x) {
  const sumOfUnicodes = (word) => {
    let result = 0;
    for (let i = 0; i < word.length; i++) {
      result += word.charCodeAt(i) - 96;
    }
    return result;
  };
  const words = x.split(' ');
  console.log(x, words.map(value => sumOfUnicodes(value)));
  const scores = words.map(value => sumOfUnicodes(value));
  return words[scores.indexOf(Math.max.apply(null, scores))];
}
