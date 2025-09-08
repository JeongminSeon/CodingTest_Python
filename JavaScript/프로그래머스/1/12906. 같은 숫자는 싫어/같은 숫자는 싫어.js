function solution(arr)
{
    let answer = [];
    
    for(const num of arr) {
        answer.push(num);
        
        if(answer.length >= 2) {
            let lastIndex = answer.length - 1;
            if(answer[lastIndex] === answer[lastIndex - 1]) {
                answer.pop();
            }
        }
    }
    
    return answer;
}