function solution(k, dungeons) {
    let count = 0;
    const visited = new Array(dungeons.length).fill(false);
    
    function dfs(health, step) {
        count = Math.max(count, step)
        
        for(let i = 0; i < dungeons.length; i++) {
            const [minHealth, useHealth] = dungeons[i];
            
            if(!visited[i] && health >= minHealth) {
                visited[i] = true;
                
                dfs(health - useHealth, step + 1);
                
                visited[i] = false;
            }
        }
    }
    
    dfs(k, count);
        
    return count;
}