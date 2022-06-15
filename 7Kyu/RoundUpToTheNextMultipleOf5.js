//Round up to the next multiple of 5
//https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript

function roundToNext5(n){
    if (n % 5 === 0) return n
      else if ((n + 1 ) % 5 === 0) return n + 1
      else if ((n + 2 ) % 5 === 0) return n + 2
      else if ((n + 3 ) % 5 === 0) return n + 3
      else if ((n + 4 ) % 5 === 0) return n + 4
  }