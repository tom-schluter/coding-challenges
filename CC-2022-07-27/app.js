// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.

// parameters

// an array of integers, an integer a and b that are both present in the initial array

// returns

// true if a and b or b and a appear consecutively in the array false if not

// psuedo code

// iterate over the array

// if current itteration is a and next iteration is b or the other way around return true

// if not return false

function consecutive(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] == a && arr[i + 1] == b) || (arr[i] == b && arr[i + 1] == a)) {
      return true;
    }
  }
  return false;
}
