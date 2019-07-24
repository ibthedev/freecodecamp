const convertToRoman = function(num) {
  const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumerals = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  let romanNumeral = "";

  for (let index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanNumeral += romanNumerals[index];
      num -= decimalValue[index];
    }
  }

  return romanNumeral;
};

console.log(convertToRoman(50000009));
