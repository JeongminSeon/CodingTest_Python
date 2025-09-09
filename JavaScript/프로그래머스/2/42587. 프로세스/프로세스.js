function solution(priorities, location) {
    let answer = 0;
    let queue = [];
    
    for(let i = 0; i < priorities.length; i++) 
    {
        let n = [priorities[i] ,i];
        queue.push(n);
    }
    
    while(queue.length !== 0) {
        let n = queue.shift();
        let prior = n[0]
        if(queue.some((task) => task[0] > prior)) {
            queue.push(n);
        } else {
            answer++;
                    
            if(n[1] === location) {
                return answer;
            }
        }
    }
}