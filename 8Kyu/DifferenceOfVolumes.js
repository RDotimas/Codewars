//Difference in volumes of cuboids
//https://www.codewars.com/kata/58cb43f4256836ed95000f97/javascript

function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
  }