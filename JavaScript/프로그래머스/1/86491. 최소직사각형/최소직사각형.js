function solution(sizes) {
    
    let maxW = -Infinity;
    let maxH = -Infinity;
    
    for(let size of sizes) {
        if(size[0] < size[1]) {
            [size[1], size[0]] = [size[0], size[1]];
        }
    }
    
    for(let size of sizes) {
        maxW = Math.max(maxW, size[0]);
        maxH = Math.max(maxH, size[1]);
    } 
    
    return maxW * maxH;
}