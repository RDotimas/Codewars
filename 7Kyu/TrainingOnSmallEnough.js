//Training on Small Enough
//https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

function smallEnough(a, limit){
    let sort = a.sort((a,b)=>b-a)
    return (limit >= sort[0])
  
  }