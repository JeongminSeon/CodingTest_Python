function solution(n, computers) {
    const visited = new Array(n).fill(false);
    let networkCount = 0;
    
    for(let i = 0; i < computers.length; i++) {
        if(!visited[i]) {
            networkCount++;
            dfs(i, visited, computers, n);
        }
    }
    
    return networkCount;
}

function dfs(currentNode, visited, computers, n){
    visited[currentNode] = true;
    
    for(let neighbor = 0; neighbor < n; neighbor++) {
        if(computers[currentNode][neighbor] === 1 && !visited[neighbor]) {
            dfs(neighbor, visited, computers, n);
        }
    }
}