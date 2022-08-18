//Replace Duplicates on list
//https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118

function distinct(a) {
    let ans = [];
    for(let i = 0; i < a.length; i++){
      if (ans.includes(a[i]) === false)
        ans.push(a[i])
    }
    return ans
  }