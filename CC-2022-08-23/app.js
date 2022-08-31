// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

// @ @@ @ @@ @ @@ @ @@ @ @@ @

// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.

// parameters

// a number representing the amount of blue beads

// returns

// a number representing the amount of red beads

// examples, see above

// psuedo code

// if n is 2 or less return 0

// else multiply n by 2 because between every blue bead is 2 red beads, however remove 2 at the end to account for the blue bead at the start and end

const countRedBeads = (n) => (n < 2 ? 0 : n * 2 - 2);
