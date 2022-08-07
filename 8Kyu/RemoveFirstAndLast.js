//Remove first and last character part 2
//https://www.codewars.com/kata/570597e258b58f6edc00230d/javascript

function array(arr){
    return arr.split(',').slice(1,-1).join(' ') || null
    
    }