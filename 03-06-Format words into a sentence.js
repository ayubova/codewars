/* Complete the method so that it formats the words into a single comma separated value.
The last word should be separated by the word 'and' instead of a comma.
The method takes in an array of strings and returns a single formatted string.
Empty string values should be ignored. Empty arrays or null/nil values being passed into the method
should result in an empty string being returned. */

function formatWords(words) {
  if (!words) {
    return '';
  }
  const filteredWords = words.filter(value => value !== '');
  if (filteredWords.length < 2) {
    return filteredWords.join('');
  }
  return `${filteredWords.slice(0, filteredWords.length - 1).join(', ')} and ${filteredWords[filteredWords.length - 1]}`;
}
