//Testing 1-2-3
//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

var number=function(array){
    if (array === []) return []
    
    return array.map((ele,ind) => `${ind + 1}: ${ele}`)
  }