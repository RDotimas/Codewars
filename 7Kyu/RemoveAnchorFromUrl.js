//Remove anchor from URL
//https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript

function removeUrlAnchor(url){
    let test = url.split('#')
    return (test.length !== 1) ? test [0] : test.join('')
    }