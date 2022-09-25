//tip calculator
//https://www.codewars.com/kata/56598d8076ee7a0759000087/train/javascript

function calculateTip(amount, rat) {
    let tip 
    let rating = rat.toLowerCase()
    switch (rating) {
        case 'terrible': tip = 0; return Math.ceil(amount * tip); break;
        case 'poor': tip = 0.05; return Math.ceil(amount * tip); break;
        case 'good': tip = 0.10; return Math.ceil(amount * tip); break;
        case 'great': tip = 0.15; return Math.ceil(amount * tip); break;
        case 'excellent': tip = 0.20; return Math.ceil(amount * tip); break;
        default: return 'Rating not recognised'
    }
  }