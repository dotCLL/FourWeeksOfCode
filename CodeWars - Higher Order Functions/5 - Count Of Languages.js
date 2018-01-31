// DESCRIPTION
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
//
// Your task is to return an object (associative array in PHP) which includes the count of each coding language represented at the meetup.
//
// For example, given the following input array:
//
// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];
// your function should return the following object (associative array in PHP):
//
// { C: 2, JavaScript: 1, Ruby: 1 }
// Notes:
//
// The order of the languages in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.

// first attempt - incorrect. Input data has more than three possible languages.
function countLanguages(list) {
  var languages = {C: 0, JavaScript: 0, Ruby: 0};
  list.forEach((e) => {
    switch(e.language) {
      case 'C':
        languages.C += 1;
        break;
      case 'JavaScript':
        languages.JavaScript += 1;
        break;
      case 'Ruby':
        languages.Ruby += 1;
        break;
      default:
        languages.Unknown = 1;
    }
  })
  return languages;
}

// Second attempt - tidier and accounts for all languages.
function countLanguages(list) {
  var languages = {};
  list.forEach((e) => {
    languages.hasOwnProperty(e.language) ? languages[(e.language)] += 1 : languages[(e.language)] = 1;
  })
  return languages;
}

// Alternate solution using reduce
function countLanguages(list) {
  return list.reduce(function(s, c) {

    if(c.language in s)
      s[c.language]++;
    else
      s[c.language] = 1;

    return s;
  }, {});
}

// My final submission
function countLanguages(list) {
  return list.reduce((langCount, dev) => {
    langCount[dev.language] = (langCount[dev.language] || 0) + 1;
    return langCount;
  }, {}); // need the , {}}: otherwise langCount will start with the full element as the first entry to the object.
}
