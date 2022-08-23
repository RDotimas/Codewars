//Find The Odd Int
//https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
    let ans = []
    if (A.length === 1)
      return A[0]
    for (let i = 0; i < A.length; i++){
      ans = A.filter(item => item === A[i])
      if (ans.length % 2 != 0){
      return A[i]}
      
    }
  }