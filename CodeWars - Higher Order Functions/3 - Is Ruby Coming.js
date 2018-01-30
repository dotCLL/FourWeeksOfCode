// DESCRIPTION
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
//
// Your task is to return:
//
// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:
//
// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];
// your function should return true.
//
// Notes:
//
// The input array will always be valid and formatted as in the example above.


// My solution
function isRubyComing(list) {
  // True false checking makes me think .every() straight away however i can see it being more efficient by jumping out
  // as soon as it finds at least one Ruby developer.
  var gotDev = false;
  list.forEach((e) => {
    if (e.language == 'Ruby') {
      gotDev = true;
      return;
    }
  })
  return gotDev;
}

// Definitely the best.
function isRubyComing(list) {
  return list.some(e => e.language === 'Ruby');
}

// JavaScript .some definition:
// "The some() method tests whether at least one element in the array passes the test implemented by the provided function."
