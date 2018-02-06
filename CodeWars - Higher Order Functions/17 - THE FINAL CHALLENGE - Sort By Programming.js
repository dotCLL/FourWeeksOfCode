// DESCRIPTION
// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
//
// Given the following input array:
//
// var list1 = [
//   { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
//   { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
//   { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
//   { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
// ];
// Write a function that returns the array sorted alphabetically by the programming language. In case there are some developers that code in the same language, sort them alphabetically by the first name:
//
// [
//   { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
//   { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' },
//   { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
//   { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' }
// ];
// Notes:
//
// The input array will always be valid and formatted as in the example above.
// The array does not include developers coding in the same language and sharing the same name.

// First attempt - failed.
function sortByLanguage(list) {
  // sort by language
  // Inside sort by language, if sort bool ===, then sort via firstName.
  return list
  .sort((a, b) => a.language > b.language)
  .sort((a, b) => (a.language === b.language) ? a.firstName > b.firstName : false);
}

// Second attempt
// reduce them all into containers.
// Sort them by key.
// Push values by first name into resulting array.
function sortByLanguage(list) {
  var result = [];
  const langs = list.reduce((languages, lang) => {
    languages[lang.language].push(lang);
    return languages;
  },{'C': [], 'Clojure': [], 'Java': [], 'JavaScript': [], 'PHP': [], 'Python': [], 'Ruby': []});
  Object.keys(langs).forEach(key => {
    langs[key].sort((a, b) => a.firstName > b.firstName).forEach(e => result.push(e));
  });
  return result;
}

// Two awesome alternate solutions
// I learned about localeCompare and this solution is more like what i was trying to
// achieve in my first attempt.
// It sorts with the compareFunction checking if the languages are equal.
// If it is it will sort using the comparator returned from using localeCompare on the firstName.
// Else it uses the localeCompare on the language.

// Basic localeCompare
// referenceString.localeCompare(compareString);
// referenceString == compareString returns 0;
// referenceString < compareString returns negative number;
// referenceString > compareString returns positive number;
function sortByLanguage(list) {
  return list.sort((a, b) => a.language === b.language ? a.firstName.localeCompare(b.firstName) : a.language.localeCompare(b.language));
}

// This one really shows the power of lodash. I'll be using this in my React project for sure.
const _ = require('lodash');
function sortByLanguage(list) {
  return _.sortBy(list, ['language', 'firstName']);
}
