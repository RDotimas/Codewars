//Is this a triangle
//https://www.codewars.com/kata/56606694ec01347ce800001b

function isTriangle(a,b,c){
    let arr = [a,b,c].sort((a,b) => a-b)
    return ((arr[0] + arr[1]) > arr[2])
  }