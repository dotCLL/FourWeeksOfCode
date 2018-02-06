// DESCRIPTION
// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
//
// Given the following input array:
//
// var list1 = [
//   { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ];
// write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:
//
// [
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ]
// Explanation of the above:
//
// Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
// Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number
// Notes:
//
// Preserve the order of the original list.
// Return an empty array [] if there is no developer with an "odd" name.
// The input array and first names will always be valid and formatted as in the example above.


// First attempt.
function findOddNames(list) {
  return list.filter(e => isOdd(e.firstName));
}

const isOdd = (name) => {
  var sum = null;
  for (i in name) {
    sum += name.charCodeAt(i);
  }
  return (sum % 2 == 0) ? false : true;
}

// Alternative solution.
function findOddNames(list) {
  return list.filter((dev) => {
    return dev.firstName.split('').reduce(((sum, e) => sum + e.charCodeAt(0)), 0) % 2 !== 0
  });
}

// What this solution is doing:
// Filtering the given list of developers down to an array.
// Only the elements that return true from the filter test are entered into the returning array.
// The test for the filter:
// Each developer has their firstname split into an array of characters.
// We reduce this array of characters down to a sum of the ASCII numerical representations.
// We then check if that number is odd and return true(pass) if so, else return false(fail).
// This is so that the filter function then knows whether to add this element to the returning array.
