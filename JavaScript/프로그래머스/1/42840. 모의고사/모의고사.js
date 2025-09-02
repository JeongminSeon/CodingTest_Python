function solution(answers) {
    let count1 = 0, count2 = 0, count3 = 0;
    
    let ans1 = [1,2,3,4,5]; // 5
    let ans2 = [2,1,2,3,2,4,2,5]; // 8
    let ans3 = [3,3,1,1,2,2,4,4,5,5]; // 10
    
    for(let i = 0; i < answers.length; i++) {
        
        if(answers[i] === ans1[i % 5]) {
            count1++;
        }
        
        if(answers[i] === ans2[i % 8]) {
            count2++;
        }
        
        if(answers[i] === ans3[i % 10]) {
            count3++;
        }
    }
    
    let scores = [count1, count2, count3];
    let max = Math.max(...scores);
    
    return scores.map((score, idx) => (score === max ? idx + 1 : null)).filter(v => v !== null);
}