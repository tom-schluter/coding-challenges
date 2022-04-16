// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// psuedo code

// The first letter needs to be uppercase so we make the whole string uppcase

// then we split it into an array

// then we loop over the array and push into a new array the repeated characters

// then we join and return the new array

const accum = (s) => {
  s = s.toUpperCase();
  let arr = s.split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push((arr[i] += arr[i].repeat(i).toLowerCase()));
  }
  newArr = newArr.join("-");
  return newArr;
};

// a much smarter persons solution

function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
// and another with spread

function accum(s) {
  return [...s]
    .map((element, index) => {
      return element.toUpperCase() + element.toLowerCase().repeat(index);
    })
    .join("-");
}
