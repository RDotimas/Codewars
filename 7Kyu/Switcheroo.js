//Switcheroo
//https://www.codewars.com/kata/57f759bb664021a30300007d

function switcheroo(x){
    let newArr = x.split('')
    let complete = []
    for (let i = 0; i < newArr.length; i++){
      if (newArr[i] === 'a'){
        complete.push('b')
      } else if (newArr[i] === 'b'){
        complete.push('a')
      }else complete.push(newArr[i])
    }return complete.join('')
  }