function solution(begin, target, words) {
    let answer = 0; 
    const visited = new Array(words.length).fill(false);
    
    const queue = [];
    queue.push([begin, 0]);
    let head = 0;
    
    while(head < queue.length) {
        const [currentWord, step] = queue[head];
        head++;
        
        if(currentWord === target) {
            return step;
        }
        
        for(let i = 0; i < words.length; i++) {
            if(!visited[i] && isOneDiff(currentWord, words[i])) {
                visited[i] = true;
                queue.push([words[i], step + 1]);
            }
        }
    }
    
    return answer;
}

function isOneDiff(word1, word2) {
    let diff = 0; 
    
    for(let i = 0; i < word1.length; i++) {
        if(word1[i] !== word2[i]) diff++;
    }
    
    return diff === 1;
}