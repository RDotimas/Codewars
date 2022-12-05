//most digits
//https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

function findLongest(array){
    console.log (array)
    let sorted = array.sort((a,b) => (b+'').length - (a+'').length)
    return sorted[0]
  }