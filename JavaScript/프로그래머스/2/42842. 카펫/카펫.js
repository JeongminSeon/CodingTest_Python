function solution(brown, yellow) {
    let answer = [];
    
    const total_tiles = brown + yellow;
    
    for(let height = 3; height <= total_tiles / 2; height++) {
        if(total_tiles % height !== 0) continue;
        
        let width = total_tiles / height;
        
        if(height > width) continue;
        
        if( (width - 2) * (height - 2) === yellow) return [width, height];
    }
}