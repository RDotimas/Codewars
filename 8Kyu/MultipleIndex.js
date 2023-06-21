//Multiple Index
//https://www.codewars.com/kata/5a34b80155519e1a00000009

function multipleOfIndex(array) {
    let ansArr = [];
    if (array[0] === 0) ansArr.push(0)
    for (let i = 0; i < array.length; i++){
      if (Number.isInteger(array[i] / i)){
        ansArr.push(array[i])
      }
    }return ansArr
  }