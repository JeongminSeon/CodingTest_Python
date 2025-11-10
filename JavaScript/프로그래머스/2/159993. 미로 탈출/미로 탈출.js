function solution(maps) {    
    let start;
    let lever;
    let exit;
    
    let dist = -1;
    maps.forEach((map, xIndex) => {
        let sIndex = map.indexOf('S');
        let lIndex = map.indexOf('L');
        let eIndex = map.indexOf('E');
        
        if(sIndex !== -1) {
            start = [xIndex, sIndex];
        }
        if (lIndex !== -1) {
            lever = [xIndex, lIndex];
        }
        if (eIndex !== -1) {
            exit = [xIndex, eIndex];
        }
    })
    
    dist = bfs(start, lever, 0, maps);
    
    if(dist !== -1) {
        dist = bfs(lever, exit, dist, maps);
    }
    
    return dist;
}

function bfs(start, end, dist, maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const visited = new Array(rows).fill(null).map(() => new Array(cols).fill(false));
    
    let queue = [[...start, dist]];
    let head = 0;
    
    while(head < queue.length) {
        const [px, py, dist] = queue[head];
        head++;
        
        if(px === end[0] && py === end[1]) {
            return dist;
        }
        
        const dx = [1, -1, 0, 0];
        const dy = [0, 0, 1, -1];
        
        for(let i = 0; i < 4; i++) {
            const nx = px + dx[i];
            const ny = py + dy[i];
            
            if(nx >= 0 && nx < rows && ny < cols && ny >= 0 && !visited[nx][ny] && maps[nx][ny] !== 'X') {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    
    return -1;
}