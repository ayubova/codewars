/* I want to know the longest length of consecutive items of X there are in Y.
I will provide you an item (Y), and a key to search for (X).
Return the length of the longest segment of consecutive keys (X) in Y.

Rules:

The item will be either an integer or string data type.

The key will be an integer or string data type.

The return value will be an integer data type.

If the key does not appear in the number, return 0. */

function getConsectiveItems(items, key) {
  const str = items.toString().split('');
  let maxLength = 0;
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == key) {
      maxLength++;
    } else {
      maxLength = 0;
    }
    if (maxLength > result) {
      result = maxLength;
    }
  }
  return result;
}
