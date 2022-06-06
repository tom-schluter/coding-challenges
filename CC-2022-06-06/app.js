// Here we have a function that help us spam our hearty laughter. But is not working! I need you to find out why...

// Expected results:

// spam(1);  // hue
// spam(6);  // huehuehuehuehuehue
// spam(14); // huehuehuehuehuehuehuehuehuehuehuehuehuehue

// parameters

//  a positive whole integer

// returns

// the string "hue" times the given number

// examples see above

// psuedo code

// create empty string variable

// make a loop that add the string "hue" to the empty string variable

// run the loop the given number amount of times

// return the variable

function spam(number) {
  let result = "";
  for (let i = 0; i < number; i++) {
    result += "hue";
  }
  return result;
}
