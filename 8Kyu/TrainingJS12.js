//Training JS #12
//https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript


function giveMeFive(obj){
    let ans = [];
  
    for (var value in obj){
      if(value.length === 5) ans.push(value);
      if (obj[value].length === 5) ans.push(obj[value])
        } 
      return ans
    }