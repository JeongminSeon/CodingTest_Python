function solution(progresses, speeds) {
    let answer = [];
    
    while(progresses.length !== 0) {
        let count = 0;
        progresses = progresses.map((progress, index) => {
            return progress += speeds[index];
        });
        
        while(progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            count++;
        }
        
        if(count >= 1) answer.push(count); 
    }
    
    return answer;
}