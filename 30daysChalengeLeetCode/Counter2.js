// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
 

// Example 1:

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
// Example 2:

// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0

// Define a function called 'createCounter' that takes an argument 'init'.
var createCounter = function(init) {

  // Declare a local variable 'current' and initialize it with the value of 'init'.
  let current = init;

  // The 'createCounter' function returns an object with three methods: 'increment', 'decrement', and 'reset'.
  return {
      // The 'increment' method increases the value of 'current' by 1 and returns the new value.
      increment: function() {
          // Increment 'current' by 1 and return the updated value.
          return ++current;
      },

      // The 'decrement' method decreases the value of 'current' by 1 and returns the new value.
      decrement: function() {
          // Decrement 'current' by 1 and return the updated value.
          return --current;
      },

      // The 'reset' method resets 'current' back to the initial value ('init') and returns it.
      reset: function() {
          // Reset 'current' to the initial value 'init' and return it.
          current = init;
          return current;
      }
  };
};
