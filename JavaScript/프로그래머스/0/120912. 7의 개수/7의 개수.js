function solution(array) {
    var answer = 0;
    
    array.forEach(num => {
        answer += (num.toString().split('7').length -1);
    });
    
    return answer;
}