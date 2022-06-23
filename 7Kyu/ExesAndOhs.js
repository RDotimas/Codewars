//Exes and Ohs
//https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
    let xArray = str.toUpperCase().split('').filter(a => a === 'X');
    let oArray = str.toLowerCase().split('').filter(b => b === 'o');

      return (xArray.length === oArray.length) ? true : false;
      
    }