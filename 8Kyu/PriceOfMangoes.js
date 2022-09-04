//Price of mangoes
//https://www.codewars.com/kata/57a77726bb9944d000000b06/javascript

function mango(quantity, price){
    return price * (quantity - (Math.floor(quantity / 3)))
}