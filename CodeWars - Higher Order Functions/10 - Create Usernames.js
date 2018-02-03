// DESCRIPTION
// Given the following input array:
//
// var list1 = [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
// ];
// write a function that adds the username property to each object in the input array:
//
// [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
//     username: 'emilyn1990' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
//     username: 'nore2000' }
// ]
// The value of the username property is composed by concatenating:
//
// firstName in lower-case;
// first letter of the lastName in lower-case; and
// the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.

// First try no testing.
function addUsername(list) {
  return list.map((e) => {
    // Concat firstname, first letter of lastname and current year minus age then transform to lower case.
    e["username"] = (e.firstName + e.lastName[0] + ((new Date()).getFullYear() - e.age)).toLowerCase();
  });
}

// At this point i wasn't sure why map wasn't working so swapped to forEach and it worked.
function addUsername(list) {
  list.forEach((e) => {
    e["username"] = (e.firstName + e.lastName[0] + ((new Date()).getFullYear() - e.age)).toLowerCase();
  });
  return list;
}

// While playing around with it i remembered that map needs the function to return the new value. This passes all tests.
function addUsername(list) {
  return list.map((e) => {
    e["username"] = (e.firstName + e.lastName[0] + ((new Date()).getFullYear() - e.age)).toLowerCase();
    return e;
  });
}

// My solution was on par if not better than the other alternate solutions provided after passing all tests and seeing all solutions.
