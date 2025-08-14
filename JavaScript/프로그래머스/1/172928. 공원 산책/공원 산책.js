function solution(park, routes) {
    let H = park.length;
    let W = park[0].length;
    
    let sr = 0, sc = 0;
    for(let i = 0; i < H; i++) {
        for(let j = 0; j < W; j++) {
            if(park[i][j] === 'S') {sr = i; sc = j;}
        }
    }
    
    // 방향 벡터
    const DIR = {
        'N': [-1, 0],
        'S': [ 1, 0],
        'W': [ 0,-1],
        'E': [ 0, 1],
    };

    for(let route of routes) {
        const [d, stepStr] = route.split(" ");
        const [dr, dc] = DIR[d];
        const step = Number(stepStr);
        
        let r = sr, c = sc;
        let ok = true;
        
        for(let i = 1; i <= step; i++) {
            const nr = sr + dr * i;
            const nc = sc + dc * i;
            
            // 범위 탐지
            if(nr < 0 || nr >= H || nc < 0 || nc >= W) {
                ok = false;
                break;
            }
            
            // 장애물 탐지
            if(park[nr][nc] === 'X') {
                ok = false;
                break;
            }
            
            r = nr; c = nc;
        }
        
        if(ok) {
            sr = r; sc = c;
        }
    }
    
    return [sr,sc];
}