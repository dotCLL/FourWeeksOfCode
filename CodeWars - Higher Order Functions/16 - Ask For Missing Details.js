// DESCRIPTION
// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
//
// Given the following input array:
//
// var list1 = [
//   { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
// ];
// write a function that
//
// 1) adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value). The value of the question property should be the following string:
//
// Hi, could you please provide your <property name>.
//
// 2) and returns only the developers with missing details:
//
// [
//   { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//   question: 'Hi, could you please provide your firstName.' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null,
//   question: 'Hi, could you please provide your language.' }
// ]
// Notes:
//
// At most only one of the values will be null.
// Preserve the order of the original list.
// Return an empty array [] if there is no developer with missing details.
// The input array will always be valid and formatted as in the example above.

// First attempt
function askForMissingDetails(list) {
  // At most only one value will be null. Use Find and then a filter.
  // If found a null value for a dev object then add new element and return true for filter.
  // Return false otherwise.
  return list.filter(dev => {
    var nullKey = Object.keys(dev).find(key => (dev[key] == null) ? true : false );
    if (nullKey === undefined) {
      return false;
    } else {
      dev['question'] = 'Hi, could you please provide your ' + nullKey + '.';
      return true;
    }
  })
}

// Alternate solution.
// This example helped me to understand more about writing JavaScript code.
// With JavaScript essentially anything returned other than a false statement returns true.
// That could be objects, even if they are empty, numbers, the statement 'true' etc.
// So my function above can be really cut down by using that knowledge and forgetting about
// the need of the return false statement.
// Also sometimes a simple for loop is still better than using HOf's for the sake of using HOF's.
function askForMissingDetails(list) {
  return list.filter(function(dev){
    for(var key in dev){
      if (dev[key] === null){
        return dev['question'] = `Hi, could you please provide your ${key}.`;
      }
    }
  });
}
