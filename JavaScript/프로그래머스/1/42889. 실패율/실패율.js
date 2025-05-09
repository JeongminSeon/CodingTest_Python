function solution(N, stages) {
    let result = [];
    
    for(let i = 1; i <= N; i++) {
        // 실패한 사람 (분자)
        let reach = stages.filter((v) => v === i).length;
        // 현재 도전 인원 (분모) 
        let curr = stages.filter((v) => v >= i).length;
        
        result.push([i,reach/curr]);
    }
    
    result.sort((a,b) => b[1] - a[1]);
    
    return result.map((item) => item[0]);
}