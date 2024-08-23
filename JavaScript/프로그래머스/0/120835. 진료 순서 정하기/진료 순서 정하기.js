function solution(emergency) {
    var answer = [];
    const copy = [...emergency];
    copy.sort((a,b) => b - a);
    
    // 배열 초기화
    for(let i =0; i < emergency.length; i++) {
        answer[i] = 0; 
    }
    
    for(let i = 0; i < emergency.length; i++) {
        let num = copy[i];
        let index = emergency.findIndex((item) => item === num);
        answer[index] = i+1;
    }
    
    
    return answer;
}