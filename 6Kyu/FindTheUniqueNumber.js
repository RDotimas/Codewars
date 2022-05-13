//Find the unique number
//https://www.codewars.com/kata/585d7d5adb20cf33cb000235/javascript


function findUniq(arr) {
    let sorted = arr.sort((a,b) => a-b);
    return ((sorted[0] != sorted[1]) ? sorted.shift() : sorted.pop())
  }