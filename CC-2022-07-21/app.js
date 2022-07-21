// The Arara are an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:

// 1 = anane
// 2 = adak
// 3 = adak anane
// 4 = adak adak
// 5 = adak adak anane
// 6 = adak adak adak
// 7 = adak adak adak anane
// 8 = adak adak adak adak

// Take a given number and return the Arara's equivalent.

// e.g.

// countArara(3) 'adak anane'

// countArara(8) 'adak adak adak adak'
// countArara 3 // -> "adak anane"

// countArara 8 // -> "adak adak adak adak"

// parameters

// a number

// returns

// a string consisting of adak and/or anane depending on the number

// examples, see above

// pseudo code

// if number is 1 return anane

// else make a copy of the number and subtract 2 from it
// each time 2 is subtracted from it a result variable should add "adak "

// if at the end there is still a number left (1) add "anane "

// return the final string with the last space removed

function countArara(n) {
  if (n == 1) {
    return "anane";
  }
  let currentNum = n;
  let result = "";
  do {
    currentNum = currentNum - 2;
    result += "adak ";
  } while (currentNum >= 2);
  if (currentNum > 0) {
    result += "anane ";
  }
  result = result.slice(0, -1);
  return result;
}
