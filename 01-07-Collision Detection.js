// Create a function to determine whether or not two circles are colliding.
// You will be given the position of both circles in addition to their radii.
// If a collision is detected, return true. If not, return false.

function collision(x1, y1, radius1, x2, y2, radius2) {
  const distance = Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2));
  return distance < radius1 + radius2;
}
