//Anagram Detection
//https://www.codewars.com/kata/529eef7a9194e0cbc1000255/javascript


var isAnagram = function(test, original) {
    let testVer = test.toLowerCase().split('').sort().join('');
    let origVer = original.toLowerCase().split('').sort().join('');
  
    return testVer == origVer
  };