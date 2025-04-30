function solution(k, score) {
    let answer = [];
    let honor = [];
    
    for(let s of score){
        honor.push(s);
        honor.sort((a,b) => b - a); // 내림차순 정렬
        
        if(honor.length > k) {
            honor.pop();
        }
        
        answer.push((honor[honor.length - 1])) // 명예의 전당 최하위 점수
    }
    
    return answer;
}