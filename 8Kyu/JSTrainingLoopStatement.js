//Training JS#9 Loop statement --while and do..while
//https://www.codewars.com/kata/57216d4bcdd71175d6000560

function padIt(str,n){
    let leftOrRight = 1
    let arr = str.split('')
    while (leftOrRight <= n)
    if (leftOrRight % 2 !== 0) {
      arr.unshift('*');
      leftOrRight++;
    }else{
      arr.push('*');
      leftOrRight++;
    }return arr.join('')
  }