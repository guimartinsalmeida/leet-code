// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// My solution
var isValid = function(s) {
  // First, I split the input string into an array of characters
  const breakString = s.split('');
  // I then define an object to map opening brackets to their corresponding closing brackets
  const possibility = {"(": ")", "[": "]", "{": "}"};
  // I initialize an empty array to use as a stack for tracking opening brackets
  const accArr = [];

  // Next, I loop through each character in the split string
  for (let i = 0; i < breakString.length; i++) {
      // I get the current character from the array
      const actual = breakString[i];
      
      // If the character is an opening bracket (i.e., it's a key in the 'possibility' object),
      // I push it onto the stack
      if (actual in possibility) {
          accArr.push(actual);
      } else {
          // If the character is a closing bracket,
          // I pop the last opening bracket from the stack
          let getLast = accArr.pop();
          
          // I then check if this last opening bracket matches the current closing bracket
          // If it doesn’t match, it means the string is not valid, so I return false
          if (possibility[getLast] !== actual) {
              return false;
          }
      }
  }

  // Finally, I check if the stack is empty
  // If the stack is empty, it means all brackets were correctly matched, so I return true
  // If the stack is not empty, it means there are unmatched opening brackets, so I return false
  return accArr.length === 0;
};

// Example usage
console.log(isValid('()')); // Should print true
console.log(isValid('([)]')); // Should print false
console.log(isValid('{[]}')); // Should print true
