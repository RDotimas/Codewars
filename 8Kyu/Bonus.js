//Do I get a bonus
//https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

function bonusTime(salary, bonus) {
    console.log (salary,bonus)
    return (bonus === true) ? '£' + salary*10 : '£'+ salary
  }