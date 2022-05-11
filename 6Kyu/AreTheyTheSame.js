//Are They The 'Same'?
//https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(array1, array2){

    if(array1 == null || array2 == null) return false;
    let sqArr = array1.map ( e => e*e ).sort((a,b) => a-b )
    let sortArr2 = array2.sort((a,b) => a-b)
  
    return sqArr.every((ele,ind,arr) => ele == sortArr2[ind])
  }