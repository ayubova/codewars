/* When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!" */

function swap(st) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return st.split('').map(value => (vowels.includes(value) ? value.toUpperCase() : value)).join('');
}
