//Is this and Equable Triangle?
//https://www.codewars.com/kata/57d0089e05c186ccb600035e

function equableTriangle(a,b,c) {
    let s = (a+b+c) / 2
    return ((a+b+c) === Math.sqrt(s * (s-a) * (s-b) * (s-c)))
  
  }