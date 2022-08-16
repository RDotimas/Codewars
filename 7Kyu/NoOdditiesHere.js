//No oddities here
//https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/javascript

function noOdds( values ){
    let ans = []
    for (let i = 0; i < values.length ; i++){
      if (values[i] % 2 === 0)
        ans.push(values[i])
    }
    
    console.log (values,ans)
    return ans
  }