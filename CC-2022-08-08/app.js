// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

// parameters

// a string

// returns

// the same string but with all characters except the last 4 turned into # characters

// examples, see above

// psuedo code

// if string length is 4 or less just return the string

// else iterate over the string and turn all but the last 4 into #

function maskify(cc) {
  let arr = cc.split("");
  if (cc.length > 4) {
    for (let i = 0; i < arr.length - 4; i++) {
      arr[i] = "#";
    }
    return arr.join("");
  } else {
    return cc;
  }
}
