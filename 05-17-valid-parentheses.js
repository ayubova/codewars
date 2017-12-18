function validParentheses(parens) {
  let open = 0;

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      open++;
    } else {
      open--;
    }
  }
  return !open && parens[parens.length - 1] !== '(';
}
