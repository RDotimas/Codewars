// You're A Square
//https://www.codewars.com/kata/54c27a33fb7da0db0100040e

// var isSquare = function(n){
//   if ((Math.sqrt(n) )
//   return true; // fix me
// }
  
  

var isSquare = function(n){
    let result;
if (n < 0)
  result = false
  else if (Math.floor(Math.sqrt(n)) === Math.sqrt(n)){
    result = true
  }else
    result = false
  return result
}