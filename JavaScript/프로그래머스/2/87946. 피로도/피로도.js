function solution(k, dungeons) {
    let maxDungeons = 0;
    const visited = new Array(dungeons.length).fill(false);
    
    function dfs(currentK, count) {
        maxDungeons = Math.max(maxDungeons, count);
        
        for(let i =0; i < dungeons.length; i++) {
            const [minHealth, useHealth] = dungeons[i];
            
            if(!visited[i] && currentK >= minHealth) {
                visited[i] = true;
                
                dfs(currentK - useHealth, count + 1);
                
                visited[i] = false;
            }
        }
    }
    
    dfs(k, 0);
    
    return maxDungeons;
}