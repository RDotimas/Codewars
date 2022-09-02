//Largest pair sum in array
//https://www.codewars.com/kata/556196a6091a7e7f58000018

function largestPairSum (numbers) {
    return numbers.sort((a,b) => a-b).slice(-2).reduce((a,b) => a+b,0)
  }