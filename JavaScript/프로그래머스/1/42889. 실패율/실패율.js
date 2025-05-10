function solution(N, stages) {
    let stagesCount = new Array(N+2).fill(0);
    
    for(let stage of stages) {
        stagesCount[stage]++; // stage 별로 있는 인원들 세기
    }
    
    let people = stages.length; // 도전 인원 수
    let result = [];
    for(let i = 1; i <= N; i++) {
        let cur = stagesCount[i];
        let fail = stagesCount[i] / people;
        people -= cur; // 실패한 인원 수만큼 전체 인원에서 제외
        
        result.push([i, fail]);
    }
    
    
    result.sort((a,b) => b[1] - a[1]);
    return result.map((v) => v[0])
}