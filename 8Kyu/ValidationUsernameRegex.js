//Validation username registration regex
//https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023/javascript

function validateUsr(username) {
    return /^[0-9a-z_]{4,16}$/.test(username)
  }