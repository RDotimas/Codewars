//Bumps in the road
//https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript

function bump(x){
    let ans = []
    let arr = x.split('')
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === 'n'){
        ans.push(arr[i])
        }
      }return (ans.length <= 15) ? 'Woohoo!' : 'Car Dead'
  }