function solution(n, computers) {
    let networkCount = 0;
    
    const visited = new Array(n).fill(false);
    
    function dfs(node) {
        let neighbors = computers[node];
        
        for(let neighbor = 0; neighbor < n; neighbor++) {
            if(!visited[neighbor] && computers[node][neighbor] === 1) {
                visited[neighbor] = true;
                dfs(neighbor);
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            networkCount++;
            dfs(i);
        }
    }
    
    return networkCount;
}