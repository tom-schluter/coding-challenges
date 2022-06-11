// Let's build a calculator that can calculate the average for an arbitrary number of arguments.

// The test expects you to provide a Calculator object with an average method:

// Calculator.average()
// The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.

// It expects Calculator.average(3,4,5) to return 4.

// parameters

// an unspecified number of arguments containing integers

// returns

// the average of all the given arguments, represented as an integer (float?)

// examples, see above

// psuedo code

// add all the arguments and then divide by the number of arguments

var Calculator = {
  average: function () {
    if (arguments.length === 0) {
      return 0;
    }
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total / arguments.length;
  },
};
