function solution(sizes) {
    let w = -Infinity;
    let h = -Infinity;
    
    for(let i = 0; i < sizes.length; i++){
        sizes[i].sort((a,b) => a - b)
    }
    
    for(let i = 0; i < sizes.length; i++){
        w = Math.max(w, sizes[i][0]);
        h = Math.max(h, sizes[i][1]);
    }

    return w * h;
}