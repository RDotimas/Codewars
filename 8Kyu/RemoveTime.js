//Remove Time
//https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e

function shortenToDate(longDate) {
    let arr = longDate.split('');
    let newArr = [];
    for (let i = 0; arr[i] != ','; i++){
      newArr.push(arr[i]);
      }
    return newArr.join('')
  }