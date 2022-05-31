// Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

// Tips:
// The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim), datetime(Python) and Time (Ruby) instances.
// The start time will always be before the end time.

// parameters

// two Date inputs, the first will always be a date before the last

// returns

// an integer representing the seconds passed

// examples

// --

// psuedo code

// subtract the last date from the first date and divide by 1000 to get the seconds

const elapsedSeconds = (startDate, endDate) => (endDate - startDate) / 1000;
