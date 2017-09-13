// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  const yourBmi = weight / (height * height);
  if (yourBmi <= 18.5) {
    return "Underweight";
  };
  if (yourBmi <= 25) {
    return "Normal";
  };
  if (yourBmi <= 30) {
    return "Overweight";
  }
  else {
  return "Obese";
  };
  }
