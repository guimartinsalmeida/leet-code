// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.



// my solution 
var romanToInt = function(s) {
  // Define an object mapping Roman numerals to their integer values
  const romanNumberEquivalence = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
  // Initialize the total value to 0
  let total = 0;
  // loop through each character in the string s
  for (let i = 0; i < s.length; i++) {
      // Check if the current character exists in romanNumberEquivalence possibilities
      if (s[i] in romanNumberEquivalence) {
          // Get the integer value of the current Roman numeral
          let current = romanNumberEquivalence[s[i]];
          // Get the integer value of the next Roman numeral (if it exists)
          let next = romanNumberEquivalence[s[i + 1]];
          // If the current value is less than the next value, subtract the current value from the total for example IV should be 4
          if (current < next) {
              total -= current;
          } else { // Otherwise, add the current value to the total for example VI should be 6 
              total += current;
          }
      }
  }
  // Return the final total value
  return total;
};
// Example usage
console.log(romanToInt('MCMXCIX')); // Should print 1999