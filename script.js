function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1],
  };

  let result = '';

  for (let key in obj) {
    while (num >= obj[key][1]) {
      result += obj[key][0];
      num -= obj[key][1];
    }
  }

  // Handle special cases like subtractive notation (e.g., IV, IX, XL, XC, etc.)
  result = result.replace('DCCCC', 'CM');
  result = result.replace('CCCC', 'CD');
  result = result.replace('LXXXX', 'XC');
  result = result.replace('XXXX', 'XL');
  result = result.replace('VIIII', 'IX');
  result = result.replace('IIII', 'IV');

  return result;
}

// You can test your code with different numbers
console.log(convertToRoman(14)); // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII

module.exports = convertToRoman;
