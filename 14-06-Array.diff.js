/* Your goal in this kata is to implement an difference function, which subtracts one list from another.

It should remove all values from list a, which are present in list b. */

const array_diff = (a, b) => a.filter(value => !b.includes(value));
