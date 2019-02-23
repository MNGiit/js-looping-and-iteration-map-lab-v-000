// Code your solution in this file.
// const map1 = array1.map(x => x * 2);

// var doubles = numbers.map(function(num) {
//  return num * 2;
// });

function lowerCaseDrivers(drivers) {
  return drivers.map( function(driver) {return driver.toLowerCase();} );
}

function nameToAttributes(drivers) {
  return drivers.map ( function(driver) {
    const first = driver.split(" ")[0];
    const last = driver.split(" ")[1];
    return { firstName: first, lastName: last };
  });
}


