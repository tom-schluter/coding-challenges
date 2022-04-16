// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// psuedo code

// the sum of two sides has to be greater than the third side in order to form a triangle

// create a statement if a + b > c and a + c > b and  b + c > a then return true

// otherwise return false

function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}

const isTriangle = (a, b, c) =>
  a + b > c && a + c > b && b + c > a ? true : false;

// ---------------------------------------------------------

//   Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

// psuedo code

// loop over the array

// filter for 4 character strings

// return a new array with the filtered items

function friend(friends) {
  const newArr = friends.filter((friend) => friend.length === 4);
  return newArr;
}

const friend = (friends) => friends.filter((friend) => friend.length === 4);
