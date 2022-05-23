// FIZZ BUZZ [INTERVIEW PRACTICE QUESTION]
//if the number is divisible by 3, fizz, 5 buzz, 3&5 fizzbuzz


function fizzBuzz (num){
    for (let i = 1; i <= num; i++){
      if (i % 3 && 5 === 0)
        console.log ('fizzbuzz');
      else if (i % 5 === 0)
        console.log ('buzz');
      else if (i % 3 === 0)
        console.log ('fizz');
      else
        console.log (i);
    }
  }
  
  
  fizzBuzz(5)
  console.log ('--------------')
  fizzBuzz(3)
  console.log ('--------------')
  fizzBuzz(15)