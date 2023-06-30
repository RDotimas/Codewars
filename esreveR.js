//Reverse
//https://www.codewars.com/kata/5413759479ba273f8100003d

reverse = function(array) {
    let reversed = []
    for (let i = 0; i < array.length; i++){
      reversed.unshift(array[i])
    }return reversed
  }