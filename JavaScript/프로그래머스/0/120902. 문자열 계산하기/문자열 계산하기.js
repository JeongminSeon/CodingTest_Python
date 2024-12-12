function solution(my_string) {
    let chars = my_string.split(" ");
    let answer = Number(chars[0]);
    
    for(let i =1; i < chars.length; i++) {
        let operator = chars[i];
        let nextNum = Number(chars[i+1]);
        
        if(operator === "+") {
            answer += nextNum;
        } else if (operator === '-') {
            answer -= nextNum;
        }
    }
    
    return answer;
}