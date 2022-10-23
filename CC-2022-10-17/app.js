// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

// parameters

// array of integers and a seperate integer

// returns

// the same array but any duplicates cannot appear more than the second argument integer given

// examples, see above

// psuedo code

// create a result array

// loop over the original array

// for each iteration over the original array loop over the result array

// each time the number of the original array is present in the result array, add 1 to a counter variable

// if that counter variable does not exceed the second argument integer, push it to the result array

// return the result array

function deleteNth(arr, n) {
  const result = [];
  arr.forEach((num) => {
    let count = 0;
    for (let i = 0; i < result.length; i++) {
      if (num == result[i]) {
        count++;
      }
    }
    if (count < n) {
      result.push(num);
    }
  });
  return result;
}
