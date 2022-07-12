//Convert Reverse Array of Digits
//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(n) {
    let newArray = Array.from(String(n),Number);
    return newArray.reverse()
  }