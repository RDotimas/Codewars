//Vowel Count
//https://www.codewars.com/kata/54ff3102c1bad923760001f3


function getCount(str) {
    let vowels = ['a','e','i','o','u'];
      return str.split('').filter(n => {
        return vowels.includes(n)
      }).length
    }