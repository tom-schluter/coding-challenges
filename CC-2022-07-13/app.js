// Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits. He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box. Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?

// The Challenge
// Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

// Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.

// parameters

// integer represetning width and a string representing aspect ratio

// returns

// the width x height in a string

// examples

// findScreenHeight(1024,"4:3"), "1024x768");

// psuedo code

// first seperate the aspect ratio into an array by splitting it on ":"

// calculate the height by dividing the width by the first number in the array and then multiplying it by the second number

// return as template literal

function findScreenHeight(width, ratio) {
  const ratioNum = ratio.split(":");
  const height = (width / ratioNum[0]) * ratioNum[1];
  return `${width}x${height}`;
}
