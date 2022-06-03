//Check the exam
//https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

function checkExam(answers, student) {
    let testScores = 0
    for (let i = 0; i <= answers.length - 1; i++){
      if (answers[i] === student[i]){
        testScores += 4;   
      }else if(student[i] === ''){
        testScores += 0;
      }else{
        testScores -= 1;
        }
  
    }
      return (testScores <= 0) ? 0 : testScores
  }