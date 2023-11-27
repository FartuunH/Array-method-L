const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  
  // Array.prototype.filter()
  // 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's
  const investorsOf1500s = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600);
  console.log(investorsOf1500s);
  
  
  // Array.prototype.map()
  // 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties
  // Hint:  Return a new object literal from the callback (don't mutate the object being passed in to map)
   const firstAndLastName = inventors.map(inven => ({
    first: inven.first,
    last:inven.last
   }));
   console.log(firstAndLastName);
  
  
  // Array.prototype.sort()
  // 3. Sort the inventors by birth date (year property), in ascending order
  
  const inventorsSort = inventors.sort((a, b) => a.year - b.year);
  console.log(inventorsSort);
  
  // Array.prototype.find()
  // 4. Find the inventor object with the first name of 'Ada'
   const inventorsAda = inventors.find((invest) => invest.first === 'Ada');
   console.log(inventorsAda);
  
  
  // Array.prototype.reduce()
  // 5. How many years did all the inventors live?
const yearsLived = inventors.reduce((total, inv) => {
    return total + (inv.passed - inv.year);
}, 0);

console.log(yearsLived);
  
  
  