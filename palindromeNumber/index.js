// Given an integer x, return true if x is a palindrome and false otherwise.


function isPalindrome(x){
  // If the number is smaller than 0, it is automatically false because it can't be a palindrome.
  // For example, -121 is not a palindrome.
  if(x < 0) return false;

  // Store the original number in 'input' and initialize 'reversed' to 0.
  let input = x;
  let reversed = 0;

  // Loop until 'x' becomes 0.
  while(x > 0){
      // Extract the last digit of 'x'. For example, if x = 121, x % 10 will give 1, which is the last digit of 121.
      let lastDigit = x % 10;
      
      // Build the reversed number by shifting 'reversed' to the left and adding 'lastDigit'.
      // For example, if reversed = 0 and lastDigit = 1, reversed will be updated to 1. 
      // If reversed = 1 and lastDigit = 2, reversed will be updated to 12.
      reversed = reversed * 10 + lastDigit;
      
      // Remove the last digit from 'x' by performing integer division by 10.
      // For example, if x = 121, Math.floor(121 / 10) will be 12, removing the last digit 1 from x.
      x = Math.floor(x / 10);
  }

  // Check if the reversed number is equal to the original number.
  return input === reversed;
}

// Test the function with the number 121.
isPalindrome(121);
