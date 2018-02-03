// DESCRIPTION
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
//
// Your task is to return:
//
// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.
// For example, given the following input array:
//
// var list1 = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
//   { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
//   { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
//   { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
//   { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
// ];
// your function should return true as there is at least one developer from each age group.

// My solution. Horrifically long but runs at max 10N so O(n) linear time.
function isAgeDiverse(list) {
  // Similar to every some from prev exercise.
  var ages = {teens: 0, twenties: 0, thirties: 0, forties: 0, fifties: 0, sixties: 0, seventies: 0, eighties: 0, nineties: 0, centenarian: 0};
  list.forEach((e) => {
    if (e.age > 0 && e.age <= 19) {
      ages.teens++;
    } else if (e.age > 19 && e.age <= 29) {
      ages.twenties++;
    } else if (e.age > 29 && e.age <= 39) {
      ages.thirties++;
    } else if (e.age > 39 && e.age <= 49) {
      ages.forties++;
    } else if (e.age > 49 && e.age <= 59) {
      ages.fifties++;
    } else if (e.age > 59 && e.age <= 69) {
      ages.sixties++;
    } else if (e.age > 69 && e.age <= 79) {
      ages.seventies++;
    } else if (e.age > 79 && e.age <= 89) {
      ages.eighties++;
    } else if (e.age > 89 && e.age <= 99) {
      ages.nineties++;
    } else if (e.age > 99) {
      ages.centenarian++;
    } else {
      console.log('mismatch');
    }
  })
  var vals = Object.keys(ages).map((key) => {
    return ages[key];
  });
  console.log(vals);
  return vals.every(x => x > 0);
}

// Alternative solution.
function isAgeDiverse(list) {
  var ages = [10, 20, 30, 40, 50, 60, 70, 80, 90,100];
  return ages.every((age) => {
    return list.some((a) => {
      return (a.age - age < 10 && a.age - age >= 0)||(a.age >= 100 && age == 100);
    });
  });
}

// Debrief.
// This is O(n^2). Doesn't really matter with a constant size of 10 x list.length however.
// Every age has to be accounted for hence .every().
// some() goes through the list and returns true if there is at least one element which
// is in equivalent range.
// Math.floor(a.age / 10) * 10 == age || a.age >= 100 && age == 100 seems more readable.

// Yep also passes. 
function isAgeDiverse(list) {
  var ages = [10, 20, 30, 40, 50, 60, 70, 80, 90,100];
  return ages.every((age) => {
    return list.some((a) => {
      return (Math.floor(a.age / 10) * 10 == age) || (a.age >= 100 && age == 100);
    });
  });
}
