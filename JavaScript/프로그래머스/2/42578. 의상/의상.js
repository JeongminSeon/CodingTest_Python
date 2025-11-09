function solution(clothes) {
    let map = new Map();
    
    for(const [cloth, name] of clothes) {
        if(map.has(name)){
            map.get(name).push(cloth);
        } else {
            map.set(name, [cloth]);
        }
    }
    
    let answer = 1; 
    
    for(const key of map.keys()) {
        answer *= (map.get(key).length + 1);
    }
    
    return answer - 1;
}