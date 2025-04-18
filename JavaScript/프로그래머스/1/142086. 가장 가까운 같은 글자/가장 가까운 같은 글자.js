function solution(s) {
    let obj = {};
    let answer = [];
    
    for(let i = 0; i < s.length; i ++) {
        let ch = s[i];
        if(ch in obj) {
            answer.push(i - obj[ch]);
        } else {
            answer.push(-1);
        }
        obj[ch] = i;
    }
    
    return answer;
}