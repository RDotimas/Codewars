//Average Scores
//https://www.codewars.com/kata/57b68bc7b69bfc8209000307

function average(scores) {
    let avg = scores.reduce((a,b) => a+b,0) / scores.length
    return (Math.ceil(avg) - avg > avg - Math.floor(avg)) ? Math.floor(avg) : Math.ceil(avg);
}