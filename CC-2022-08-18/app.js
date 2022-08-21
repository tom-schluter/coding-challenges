// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// parameters

// a string containing only letters a, b, c

// returns

// same string but occurances of a turned into b and vice versa

// examples, see above

// psuedo code

// iterate over the string

// if current iteration is a then push b to a result variable

// if current iteration is b then push a to result variable

// else push the same letter as the iteration to the result variable

// return variable

function switcheroo(x) {
  let result = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] == "a") {
      result += "b";
    } else if (x[i] == "b") {
      result += "a";
    } else {
      result += x[i];
    }
  }
  return result;
}
