function solution(k, tangerine) {
    let map = new Map();
    
    for(let t of tangerine) {
        map.set(t, (map.get(t) || 0 ) + 1);
    }
    
    const counts = Array.from(map.values());
    counts.sort((a,b) => b - a);
    
    let answer = 0;
    for(const count of counts) {
        answer++;
        k -= count;
        
        if(k <= 0) {
            break;
        }
    }
    
    return answer;
    
}