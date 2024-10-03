function solution(arr)
{
    let answer = [];
    answer.push(arr[0]);
    
    if(arr.length === 1) {
        return answer;
    }
    
    for(let i = 1; i < arr.length; i++) {
        if(answer[answer.length - 1 ] !== arr[i]) {
            answer.push(arr[i]);
        }
    }
    return answer;
}