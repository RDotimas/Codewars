//Summing a numbers digits
//https://www.codewars.com/kata/52f3149496de55aded000410/javascript

function sumDigits(number) {
    let pos = Math.abs(number).toString().split('')
    if (pos.length === 1)
    return Number(pos[0])
  
    return pos.reduce((a,b) => Number(a)+Number(b))
  }