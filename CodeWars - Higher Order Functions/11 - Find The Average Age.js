// DESCRIPTION
// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
//
// Given the following input array:
//
// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];
// write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).
//
// Notes:
//
// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.

// Not too tricky, failed sample test because i used the entire object of curr rather than curr.age.
// After swap the reducer worked perfectly and passed all tests.
function getAverageAge(list) {
  // Round the reduction of the list to get sum of all ages divided by the length of the list.
  return Math.round(list.reduce((prev, curr) => {
    return prev + curr.age;
  },0) / list.length);
}

// Condensed version.
function getAverageAge(list) {
  return Math.round(list.reduce((prev, curr) => prev + curr.age, 0) / list.length);
}
