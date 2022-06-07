//Sum of all the Multiples of 3 or 5
//https://www.codewars.com/kata/57f36495c0bb25ecf50000e7

function findSum(n) {
    let multiples = 0
    for (let i = 1; i <= n; i++){
      if (i % 3 === 0)
        multiples += i
      else if (i % 5 === 0)
        multiples += i     
    }
    return multiples
  }