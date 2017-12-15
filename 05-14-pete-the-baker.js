function cakes(recipe, available) {
  const portions = Object.keys(recipe).reduce((acc, value) => [...acc, available[value] / recipe[value]], []);
  return portions.some(v => !v) ? 0 : Math.floor(Math.min.apply(null, portions));
}
