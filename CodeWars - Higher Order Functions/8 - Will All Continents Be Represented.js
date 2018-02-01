// DESCRIPTION
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
//
// Your task is to return:
//
// true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
// false otherwise.
// For example, given the following input array:
//
// var list1 = [
//   { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//   { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//   { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
// ];
// your function should return true as there is at least one developer from the required 5 geographic zones.
//
// Notes:
//
// The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'.

// Messed around a lot only to find that JavaScript arrays of object will return undefined for length.
// Ended up using previous methodologies for reduce to get a tally and assure that the tally had at least 5 entries.
function allContinents(list) {
  // If the list isn't big enough for all continents we know it will fail.
  if (list.length < 5) {
    return false;
  }
  // Make a tally of all continents. If there aren't 5 distinct entries it will fail.
  if (Object.keys(list.reduce((contCountArr, dev) => {
    contCountArr[dev.continent] = (contCountArr[dev.continent] || 0) + 1;
    return contCountArr;
  },{})).length < 5) {
    return false;
  }
  return true;
}

// Blown away by how simple this could have been with every and some.
function allContinents(list) {
  return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(x => list.some(y => x==y.continent));
}

// As we have a static data check we can use the every function to make sure that all of the entries are spoken for.
