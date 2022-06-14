//Fix your code before your garden dies
//https://www.codewars.com/kata/57158fb92ad763bb180004e7/train/javascript

function rainAmount(mm){
    return (mm >= 40) ? "Your plant has had more than enough water for today!" : `You need to give your plant ${Math.abs(mm - 40)}mm of water`
  }