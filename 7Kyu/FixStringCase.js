//Fix String Case
//https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

function solve(s){
    let arr = s.split('')
    let lowArr = arr.filter((ele) => ele.toLowerCase() === ele)
    let upArr = arr.filter((ele) => ele.toUpperCase() === ele)
    return (lowArr.length >= upArr.length) ? s.toLowerCase() : s.toUpperCase()

}