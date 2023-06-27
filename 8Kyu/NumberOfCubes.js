//Count the number of cubes with paint on
//https://www.codewars.com/kata/5763bb0af716cad8fb000580

function countSquares(cuts){
    if(cuts === 0) return 1
    return ((cuts*cuts)*6)+2
  }