// Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// 'X' --> busy
// 'O' --> empty
// If all rooms are busy, return "None available!"

// paramters

// array containing either 'X' OR 'O' elements or both

// returns

// index of the first occurance of 'O' if it exists, else 'None available!'

// examples

// assert.strictEqual(meeting(['X', 'O', 'X']), 1);
// assert.strictEqual(meeting(['O','X','X','X','X']), 0);
// assert.strictEqual(meeting(['X','X','X','X','X']), 'None available!');

// psuedo code

// loop over the array

// if current element is O return the index value

// if, after the loop is done, no O is found return 'None available'

function meeting(x) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] == "O") {
      return i;
    }
  }
  return "None available!";
}
