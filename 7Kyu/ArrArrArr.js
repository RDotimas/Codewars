//Array Array Array
//https://www.codewars.com/kata/57eb936de1051801d500008a

function explode(x){
    let score
    let ansArr = []
    if ((typeof x[0] != 'number') & (typeof x[1] != 'number')) return 'Void!'
    if ((typeof x[0] != 'number') & (typeof x[1] === 'number')){
      score = x[1]
  
    } else if ((typeof x[0] === 'number') & (typeof x[1] != 'number')){
      score = x[0]
  
    } else {
      score = x[0] + x[1]
  
    }
    for (let i = 0; i < score; i++){
      ansArr.push(x)
    } 
    console.log(ansArr)
    return ansArr
  
  }