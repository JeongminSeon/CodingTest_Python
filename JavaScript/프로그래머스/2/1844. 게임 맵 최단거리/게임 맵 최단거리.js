function solution(maps) {
    let result = -1;
    
    const n = maps.length;
    const m = maps[0].length;
    const visited = new Array(n).fill(null).map(() => new Array(m).fill(false));
    
    const queue = [[0, 0, 1]];
    visited[0][0] = true; 
    
    let head = 0;
    
    while(head < queue.length){
        const [px, py, dist] = queue[head];
        head++;
        
        if (px === n - 1 && py === m - 1) {
            return dist;
        }
        
        // 4 방향 탐색
        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, 1];
        
        for(let i = 0; i < 4; i++) {
            const nx = px + dx[i];
            const ny = py + dy[i];
            
            if(nx < n && ny < m && nx >= 0 && ny >= 0 && maps[nx][ny] === 1) {
                if(!visited[nx][ny]){
                    visited[nx][ny] = true; 
                    queue.push([nx,ny, dist+1])
                }
            }
        }
    }
    
    
    return result;
}