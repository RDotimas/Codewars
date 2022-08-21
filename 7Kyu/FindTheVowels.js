//Find the Vowels
//https://www.codewars.com/kata/5680781b6b7c2be860000036/javascript

function vowelIndices(word){
    console.log (word)
    let vowels = ['a','e','i','o','u','y']
    let ans = []
    for (let i = 0; i < word.length; i++){
      if (vowels.includes(word[i].toLowerCase()))
        ans.push(i + 1)
    }return ans
  }