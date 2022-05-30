//Minimize the sum of the array
//https://www.codewars.com/kata/5a523566b3bfa84c2e00010b

function minSum(arr) {
    console.log (arr)
    arr.sort((a,b)=>a-b)
    s=0
    while(arr.length)s+=arr.pop()*arr.shift()
    console.log (s)
    return s
  }