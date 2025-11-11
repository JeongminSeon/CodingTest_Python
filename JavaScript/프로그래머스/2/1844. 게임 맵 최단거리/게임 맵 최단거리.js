function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    
    const visited = new Array(rows).fill(null).map(() => new Array(cols).fill(false));
    const queue = [];
    queue.push([0,0,1]);
    let head = 0;
    
    visited[0][0] = true;
    
    while(head < queue.length) {
        const [px, py, dist] = queue[head];
        head++;
        
        if(px === rows-1 && py === cols-1) {
            return dist;
        }
        
        const dx = [1, -1, 0, 0]; 
        const dy = [0, 0, -1, 1];
        
        for(let i = 0; i < 4; i++) {
            const nx = px + dx[i];
            const ny = py + dy[i];
            
            if(nx >= 0 && nx < rows && ny >= 0 && ny < cols && maps[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
        
        
    }
    
    return -1;
}