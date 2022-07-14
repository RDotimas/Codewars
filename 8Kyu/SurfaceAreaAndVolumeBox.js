//Surface area and volume of a box
//https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript

function getSize(w, h, d){
    let arr = []
    arr[0] = (2*w*h)+(2*d*w)+(2*d*h)
    arr[1] = w*h*d
      return arr
      }