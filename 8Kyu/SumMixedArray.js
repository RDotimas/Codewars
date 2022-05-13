//Sum Mixed Array
//https://www.codewars.com/kata/57eaeb9578748ff92a000009/javascript

function sumMix(x){
    return x.map(a => parseInt(a)).reduce ((a,b) => a + b,0)
  }