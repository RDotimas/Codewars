//Count the digit
//https://www.codewars.com/kata/566fc12495810954b1000030/javascript

function nbDig(n, d) {
  let ans = ''
    for (let i = 0; i <= n; i++){
      ans += Math.pow (i,2)
    }
  return ans.split(d).length-1
}
  