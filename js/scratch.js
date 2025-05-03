

let returnScore = function(score, totalScore) {
    let percent = (score / totalScore) * 100; 
    let grade = '';
    if(percent >= 90) {
        grade = 'A';
    }else if(percent >= 80) {
        grade = 'B';
    }else if( percent >=70) {
        grade = 'C';
    }else if(percent >= 60) {
        grade = 'D';
    }else {
        grade = 'F';
    }
    return console.log(`${score} / ${totalScore} -> you got a ${grade} (${percent}%)`);
}
returnScore(78, 100);
