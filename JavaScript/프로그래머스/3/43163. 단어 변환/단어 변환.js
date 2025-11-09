function solution(begin, target, words) {
    const queue = [];
    const visited = {};
    
    queue.push([begin, 0]);
    visited[begin] = true;
    
    let head = 0;
    
    while (head < queue.length) {
        
        const [currentWord, step] = queue[head];
        head++;
        
        if(currentWord === target) return step;
        
        for(const word of words) {
            if(!visited[word] && isOneDiff(currentWord, word)) {
                visited[word] = true;
                queue.push([word, step + 1]);
            }
        }
    }
    
    return 0;
}

// helper 함수
function isOneDiff(word1, word2) {
    let diff = 0;
    
    for(let i = 0; i < word1.length; i++) {
        if(word1[i] !== word2[i]) diff++;
    }
    
    return diff === 1;
}