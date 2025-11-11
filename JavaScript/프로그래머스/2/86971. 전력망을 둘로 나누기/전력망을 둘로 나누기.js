function solution(n, wires) {
    let minDiff = Infinity;
    
    const graph = new Array(n+1).fill(null).map(() => []);
    for (const [a, b] of wires) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    function dfs(startNode, cutA, cutB) {
        const visited = new Array(n+1).fill(false);
        const stack = [startNode];
        visited[startNode] = true;
        let count = 0; 
        
        while(stack.length > 0) {
            const node = stack.pop();
            count++;
            
            for (const neighbor of graph[node]) {
                if((node === cutA && neighbor === cutB) || (node === cutB && neighbor === cutA)){
                    continue; // 간선 무시
                }
                
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            }
            
        }
        return count;
    }
    
    for(const [a, b] of wires) {
        const count = dfs(a, a, b);
        
        const otherCount = n - count;
        
        minDiff = Math.min(minDiff, Math.abs(count - otherCount))
    }
    
    return minDiff;
    
}