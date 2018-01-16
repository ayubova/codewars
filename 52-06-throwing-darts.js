// You've just recently been hired to calculate scores for a Dart Board game!

// Scoring specifications:

// 0 points - radius above 10
// 5 points - radius between 5 and 10 inclusive
// 10 points - radius less than 5
// If all radiuses are less than 5, award 100 BONUS POINTS!

// Write a function that accepts an array of radiuses (can be integers and/or floats), and returns a total score using the above specification.

// An empty array should return 0.


function scoreThrows(radiuses) {
  if (radiuses.length === 0) {
    return 0;
  }
  const scores = radiuses.reduce((acc, v) => {
    if (v > 10) {
      return acc;
    }
    if (v <= 10 && v >= 5) {
      return acc + 5;
    }
    return acc + 10;
  }, 0);

  return radiuses.every(e => e < 5) ? scores + 100 : scores;
}
