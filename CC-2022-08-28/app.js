// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

// parameters

// object containing languages and scores with those languages

// returns

// only the languages with a score of 60 or above sorted in descending order

// examples, see above

// psuedo code

// filter out the scores under 60

// sort the filtered results

// return only the names in an array

function myLanguages(results) {
  const highScores = [];
  for (const [key, value] of Object.entries(results)) {
    if (value >= 60) {
      highScores.push([key, value]);
    }
  }
  let sortedArr = highScores.sort((a, b) => b[1] - a[1]);
  const result = [];
  sortedArr.forEach((language) => result.push(language[0]));
  return result;
}
