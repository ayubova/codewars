function incrementString(string) {
  const letters = string.split('').filter(e => /[a-zA-Z]/.test(e)).join('');
  const numbers = string.split('').filter(v => /[0-9]/.test(v));
  const incrementedNumber = String(+numbers.join('') + 1);
  const modifyedNumber = numbers.length > incrementedNumber.length ?
    '0'.repeat(numbers.length - incrementedNumber.length) + incrementedNumber : incrementedNumber;

  return numbers.length ? letters + modifyedNumber : string + 1;
}
