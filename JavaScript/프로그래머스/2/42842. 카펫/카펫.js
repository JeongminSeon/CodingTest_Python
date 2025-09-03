function solution(brown, yellow) {
    
    const total_tiles = brown + yellow;
    
    for(let i = 1; i <= total_tiles; i++) {
        let height;
        let width;
        
        if(total_tiles % i === 0) {
            height = i;
            width = total_tiles / i;
        }
        
        if(height * width === brown + yellow && (height-2) * (width - 2) === yellow && width >= height) {
            return [width, height]
        }
    }
}