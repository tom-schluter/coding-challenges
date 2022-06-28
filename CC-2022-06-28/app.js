// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

// parameters

// a string starting with C, a number of dots in between and then then the character M

// returns

// Escaped! if there are more than 3 dots between the C and M, otherwise return Caught!

// examples, see above

// psuedo code

// check if either the second, third, fourth, or fifth character of the string is an M, if it is return caught otherwise return escaped

const catMouse = (x) =>
  x[4] == "m" || x[3] == "m" || x[2] == "m" || x[1] == "m"
    ? "Caught!"
    : "Escaped!";
