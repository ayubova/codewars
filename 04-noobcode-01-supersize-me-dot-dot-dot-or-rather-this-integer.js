// Write a function that rearranges an integer into its largest possible value.

function superSize(num){
  return Number(String(num).split('').sort().reverse().join(''));
}
