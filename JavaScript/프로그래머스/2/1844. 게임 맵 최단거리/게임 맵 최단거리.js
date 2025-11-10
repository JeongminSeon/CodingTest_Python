function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    
    const visited = new Array(rows).fill(null).map(() => new Array(cols).fill(false));
    
    const queue = [];
    queue.push([0,0,1]);
    visited[0][0] = true;
    
    let head = 0;
    
    while(head < queue.length) {
        const [px, py, dist] = queue[head];
        head++;
        
        // 종료 조건
        if(px === rows - 1 && py === cols - 1) return dist;
        
        // 상, 하, 좌, 우 이동
        const dx = [1, -1, 0, 0];
        const dy = [0, 0, -1, 1];
        
        for(let i = 0; i < 4; i++ ) {
            const nx = px + dx[i];
            const ny = py + dy[i];
            
            if(nx >= 0 && nx < rows && ny >= 0 && ny < cols && !visited[nx][ny] && maps[nx][ny] === 1) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    
    return -1;
}