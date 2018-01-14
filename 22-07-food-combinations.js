function actuallyReallyGood(foods) {
  if (foods.length === 0) {
    return "You know what's actually really good? Nothing!";
  }
  const filteredFoods = foods.map(c => c.toLowerCase()).filter((e, index, arr) => arr.indexOf(e) === index);
  const toCapitalize = word => word[0].toUpperCase() + word.slice(1);
  return filteredFoods.length === 1 ? `You know what's actually really good? ${toCapitalize(filteredFoods[0])} and more ${filteredFoods[0]}.` :
    `You know what's actually really good? ${toCapitalize(filteredFoods[0])} and ${filteredFoods[1]}.`;
}
