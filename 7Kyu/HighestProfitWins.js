//Highest profit wins
//https://www.codewars.com/kata/559590633066759614000063

function minMax(arr){
    let sorted = arr.sort((a,b)=>a-b)
    if (sorted.length === 1){
      return [sorted[0],sorted[0]]
      }
    return [sorted.shift(),sorted.pop()]
  }