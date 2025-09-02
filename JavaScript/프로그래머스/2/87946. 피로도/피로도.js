function solution(k, dungeons) {
    let route = new Set();
    let max = 0; // 방문할 수 있는 던전 수
    
    function createRoutes(currentRoute, remainPoints) {
        
        if(currentRoute.length === dungeons.length) {
            route.add(currentRoute);
        }
        
        for(let i = 0; i < remainPoints.length; i++) {
            let pointToAttach = remainPoints[i]
            const nextPoints = [...remainPoints];
            nextPoints.splice(i, 1);
            
            createRoutes([...currentRoute, pointToAttach], nextPoints);
        }
    }
    
    createRoutes([], dungeons);
    
    for(const arr of route) {
        let count = 0; // 임시 카운터
        let hp = k;
        for(const point of arr) {
            if(hp >= point[0]) {
                hp -= point[1];
                count++;
            } else {
                break;
            }
        }
        max = Math.max(count, max);
    }
    
    return max
}