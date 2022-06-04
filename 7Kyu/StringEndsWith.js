//String ends with
//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

function solution(str, ending){
    let end = str.split('').slice(-(ending.length)).join('')
    if (ending === '') return true
    console.log (str,ending,end)
    return (end === ending) ? true : false
  }