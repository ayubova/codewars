// Create (a) method(s) eqAll that determines if all elements of a list are equal.
// list can be a String or an Array; return value is a Boolean.
// Your method(s) should not be enumerable. Equality should be strict (===).

Object.defineProperty(String.prototype, 'eqAll', {
 value: function eqAll() {
  return this.split('').every(e => e === this[0]);
} 
});

Object.defineProperty(Array.prototype, 'eqAll', {
 value: function eqAll() {
  return this.every(e => e === this[0]);
} 
});
