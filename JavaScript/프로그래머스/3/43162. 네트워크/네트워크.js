function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false);
    
    function dfs(node) {
        
        if(visited[node]) {
            return ;
        }
        
        visited[node] = true;
        
        for(let neighbor = 0; neighbor < n; neighbor++ ) {
            if(computers[node][neighbor] === 1 && !visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }
    
    for(let i = 0; i < n; i ++) {
        if(!visited[i]) {
            answer++; // 방문 안했으면 덩어리 증가
            dfs(i);
        }
    }
    
    return answer;
}