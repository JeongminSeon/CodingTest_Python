function solution(answers) {
    let count1 = 0, count2 = 0, count3 = 0;
    
    let ans1 = [1,2,3,4,5]; // 길이 5
    let ans2 = [2,1,2,3,2,4,2,5]; // 길이 8
    let ans3 = [3,3,1,1,2,2,4,4,5,5]; // 길이 10
    
    answers.forEach((ans,idx) => {
        if(ans === ans1[idx % 5]) {
            count1++;
        }
        if(ans === ans2[idx % 8]) {
            count2++;
        }
        if(ans === ans3[idx % 10]) {
            count3++;
        }
    })
    
    let scores = [count1, count2, count3];
    let max = Math.max(...scores);
    
    return scores
        .map((score, idx) => (score === max ? idx + 1 : null)) 
        .filter(v => v !== null); // 최대값 아닌애들 제외
}