//Disemvowel Trolls
//https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    let arr = str.split('')
    return arr.filter(e=>!vowels.includes(e)).join('')
  
  
  }