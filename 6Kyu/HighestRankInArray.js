//Highest Rank Number in an Array
//https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

function highestRank(arr){
    return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
  }