function solution(X, Y) {
    const obj1 = {}; // X 체크
    const obj2 = {}; // Y 체크
    
    let results = '';

    for(let x of X) {
        obj1[x] = (obj1[x] || 0) + 1;
    }
    
    for(let y of Y) {
        obj2[y] = (obj2[y] || 0) + 1;
    }
    
    for(let i = 9; i >= 0; i--) {
        const count = Math.min(obj1[i] || 0, obj2[i] || 0);
        results += String(i).repeat(count);
    }
    
    
    if(results === '') return "-1";
    if(results[0] === '0') return "0";
    
    return results;
}