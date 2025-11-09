function solution(sizes) {
    let maxW = -Infinity;
    let maxH = -Infinity;
    
    for(const size of sizes) {
        size.sort((a, b) => a - b);
    }
    
    for(const size of sizes) {
        maxW = Math.max(maxW, size[0]);
        maxH = Math.max(maxH, size[1]);
    }
    
    return maxW * maxH;
}