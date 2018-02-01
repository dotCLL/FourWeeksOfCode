// DESCRIPTION
// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
//
// Your task is to return an array which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.
//
// For example, given the following input array:
//
// var list1 = [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//   { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ];
// your function should return the following array:
//
// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]
// Notes:
//
// The input array will always be valid and formatted as in the example above.

// First attempt
function findSenior(list) {
  // Sort descending
  var sorted = list.sort((a, b) => {
    return a.age < b.age;
  });
  // Filter all the equal the first element's age.
  return sorted.filter(e => e.age === sorted[0].age);
}

// Tidied
function findSenior(list) {
  var sorted = list.sort((a, b) => a.age < b.age ? true : false);
  return sorted.filter(e => e.age === sorted[0].age);
}

// Sorting resulted in the order not being held causing failed tests. Went back to a more basic max find first algorithm.
function findSenior(list) {
  // Get highest value.
  var max = 0;
  list.forEach((x) => {
    if (x.age > max) max = x.age;
  })
  // Move everything to an array that starts with that value.
  return list.filter(i => i.age === max);
}

// More succinct version
function findSenior(list) {
  var maxAge = Math.max(...list.map(person => person.age));
  return list.filter(person => person.age === maxAge);
}

// I want to break down this optimum answer more to understand it better.
// Firstly, the filter / calling of the Math library makes complete sense.
// I'm new to the spread operator but as i understand it, it simply expands the list contents out.
// The mapping of the list is causing the whole 'person' objects to be condensed down to simply their age component.
// So the list is mapped to just be each persons age -> the list is then spread out and passed through to the Math.max function.
// IE instead of Math.max(list[0], list[1], list[2]........) you use ES6 and get Math.max(...list).
// This gives us the maximum age which we then simply filter any of the elements which don't equal the maxAge out of the original list.
