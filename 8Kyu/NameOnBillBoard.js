//Name on billboard
//https://www.codewars.com/kata/570e8ec4127ad143660001fd

function billboard(name, price = 30){
    let total = 0
    let length = name.split('')
    for(let i = 0; i < length.length; i++){
      total = total+price
    }
    return total
  } 