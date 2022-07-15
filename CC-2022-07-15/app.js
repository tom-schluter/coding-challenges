// Say hello!

// Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

// Example:

// greet("Niks") === "hello Niks!";
// greet("") === null; // Return null if input is empty string
// // greet(null) === null; // Return null if input is

// parameters

// a string or null

// returns

// if null or empty string return null, else return hello <name>!

// examples, see above

// pseudo code

// check for null or empty string, otherwise return template literal

const greet = (name) => (name == null || name == "" ? null : `hello ${name}!`);
