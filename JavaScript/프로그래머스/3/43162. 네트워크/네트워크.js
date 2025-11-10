function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false);
    
    function dfs(currentNode) {
        for(let neighbor = 0; neighbor < n; neighbor++) {
            if(!visited[neighbor] && computers[currentNode][neighbor] === 1) {
                visited[neighbor] = true;
                dfs(neighbor);
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            answer++;
            dfs(i);
        }
    }
    
    return answer;
}