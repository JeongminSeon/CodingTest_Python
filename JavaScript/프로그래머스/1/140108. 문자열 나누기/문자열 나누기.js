function solution(s) {
    let answer = 0;
    let x = s[0];
    let xCount = 0;
    let notXCount = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(x === s[i]) {
            xCount++;
        } else {
            notXCount++;
        }
        
        if(xCount === notXCount) {
            answer++; // 누적카운팅 이용
            xCount = 0;
            notXCount = 0;
            x = s[i+1]; // 다음껄 첫 글자로 지정
        }
    }
    
    if(xCount !== 0 || notXCount !== 0) answer++;
    
    return answer;
}