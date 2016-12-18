const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
];

const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
function filterInventors(inventor){
  return inventor.year >= 1500 && inventor.year < 1600;
}
console.log('inventors in the 1500s:');
console.table(inventors.filter(filterInventors));

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
function getNames(inventor){
  return [inventor.first, inventor.last]; 
}
console.log('inventors first and last names:');
console.table(inventors.map(getNames));

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
function sortInventors(inventorOne, inventorTwo){
  return inventorOne.year - inventorTwo.year; 
}
console.log('inventors by age:');
console.table(inventors.sort(sortInventors));

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
function totalYears(total, inventor){
  return total + inventor.passed - inventor.year;
}
console.log('inventors total years:');
console.log(inventors.reduce(totalYears, 0));

// 5. Sort the inventors by years lived
function yearsLived(inventorOne, inventorTwo){
  inventorOne.yearsLived = inventorOne.passed - inventorOne.year;
  inventorTwo.yearsLived = inventorTwo.passed - inventorTwo.year;
  return (inventorOne.yearsLived) - (inventorTwo.yearsLived);
}
console.log('inventors by years lived:');
console.table(inventors.sort(yearsLived));

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. sort Exercise
// Sort the people alphabetically by last name
function lastName(a, b){
  return a.split(', ')[0] - b.split(', ')[0];
}
console.log('people by last name:');
console.log(people.sort(lastName));

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick' ];
function unique(total, vehicle, index){
  if(index == data.indexOf(vehicle)){
    return total + 1;
  }
  else{
    return total;
  }
}
console.log('number of unique vehicles:');
console.log(data.reduce(unique, 0));