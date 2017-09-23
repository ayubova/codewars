// Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(this, args);
  }
}


function gps(s, x) {
  const delta_distance = str => str.split('-')[1] - str.split('-')[0];
  const speed = x.map(value => (3600 * delta_distance(value)) / s);
  console.log(s, x, speed);
  return Math.max.apply(null, speed);
}

