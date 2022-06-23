//Find the Stray number
//https://www.codewars.com/kata/57f609022f4d534f05000024

function stray(numbers) {
    let sortArr = numbers.sort ((a,b) => a-b);
    let odd;
    if (sortArr[0] !== sortArr[1]){
      odd = sortArr [0];
    }else{
      odd = sortArr.pop();
      }
    return odd;
  }