function solution(s) {
    let numbers = s.split(" ");
    let answer = []
    
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] === 'Z') {
            answer.pop();
        } else {
            answer.push(Number(numbers[i]));
        }
    }
    
    return answer.reduce((acc, value) => acc + value, 0);
}