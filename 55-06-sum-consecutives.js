// You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

// Extra credit if you solve it in one line. You can asume there is never an empty list/array and there will always be an integer.

// Same meaning: 1 == 1

// 1 != -1


const sumConsecutives = s =>
  s.reduce((acc, v, i) => (v === s[i - 1] ? acc.slice(0, -1).concat(acc[acc.length- 1] + v) : acc.concat(v)), []);
