function solution(progresses, speeds) {
    let answer = []; 
    let head = 0;
    while(head < progresses.length) {
        let count = 0;
        for(let i = 0; i < speeds.length; i++) {
            progresses[i] += speeds[i];
            if(progresses[head] >= 100) {
                head++;
                count++;
            }
        }
        
        if(count !== 0) answer.push(count);
    }
    
    return answer;
}