function solution(maps) {
    let dist;
    let start;
    let lever;
    let exit;
    
    for(let i = 0; i < maps.length; i++) {
        for(let j = 0; j < maps[0].length; j++) {
            if(maps[i][j] === 'S') start = [i,j];
            if(maps[i][j] === 'L') lever = [i,j];
            if(maps[i][j] === 'E') exit = [i,j];
        }
    }
    
    dist = bfs(start, lever, 0, maps);
    
    if(dist === -1) return -1;
    
    return bfs(lever, exit, dist, maps);
    
}

function bfs(start, end, dist, maps) {
    const rows = maps.length; 
    const cols = maps[0].length;
    const visited = new Array(rows).fill(null).map(() => new Array(cols).fill(false));
    
    const queue = [];
    let head = 0;
    queue.push([...start,dist]);
    visited[start[0]][start[1]] = true;
    
    while(head < queue.length) {
        const [px, py, currentDist] = queue[head];
        head++;
        
        if(px === end[0] && py === end[1]){
            return currentDist;
        }
        
        const dx = [1, -1, 0, 0];
        const dy = [0, 0, -1, 1];
        
        for(let i = 0; i < 4; i++) {
            const nx = px + dx[i];
            const ny = py + dy[i];
            
            if(nx >= 0 && nx < rows && ny >= 0 && ny < cols && maps[nx][ny] !== 'X'){
                if(!visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx,ny, currentDist+1]);
                }
            }
        }
    }
    
    return -1;
}