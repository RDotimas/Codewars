//Nth power
//https://www.codewars.com/kata/57d814e4950d8489720008db

const index = (array, n) => ((array.length - 1) < n) ? -1 : array[n]**n
