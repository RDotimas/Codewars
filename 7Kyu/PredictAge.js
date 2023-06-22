//Predict Your Age
//https://www.codewars.com/kata/5aff237c578a14752d0035ae

function predictAge(...age){
    let addAge = []
    for (let i = 0; i < age.length; i++) {
      addAge.push(age[i] * age[i])
    }
    return Math.floor((Math.sqrt(addAge.reduce((a,b) => a + b, 0)) / 2))
  }