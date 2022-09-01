//Factorial
//https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript

function factorial(n){
    if(n >= 13 || n <= -1){          
        throw new RangeError ("The argument must be above -1 and less than 13")
        }
    if (n === 0 || n === 1){
      return 1
    }
    let arr = [n]
      for (let i = n; i > 1; i--){
        arr.push(i-1)
      }  console.log (arr)
    return arr.reduce ((a,b)=>a*b,1)
  
  }