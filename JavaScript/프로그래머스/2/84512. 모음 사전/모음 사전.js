function solution(target) {
    const words = ['A', 'E', 'I', 'O', 'U']
    let answer = 0;
    let found = false;
    
    function dfs(currentWord) {
        if(currentWord.length > 5 || found) {
            return;
        }
        
        if (currentWord !== "") {
            answer++;
            
            if (currentWord === target) {
                found = true;
                return;
            }
        }
        
        for(let i = 0; i < 5; i++) {
            dfs(currentWord + words[i]);
        }
    }
    
    dfs('');
    
    return answer;
}