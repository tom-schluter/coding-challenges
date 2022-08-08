
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:


function findUniq(arr) {
    let first = arr[0];
    let second;
    for (let i=0; i<arr.length; i++) {
      if (arr[i] != first) {
        second = arr[i];
      }
    }
    if (first != arr[arr.length-1] && first != arr[1]) {
      return first;
    } else {
      return second;
    }
  }
  