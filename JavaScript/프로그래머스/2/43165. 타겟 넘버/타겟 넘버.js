function solution(numbers, target) {
    let answer = 0;
    
    function dfs(index, currentValue) {
        if(index === numbers.length) {
            if(currentValue === target) answer++;
            return;
        }
        
        dfs(index + 1, currentValue + numbers[index]);
        dfs(index + 1, currentValue - numbers[index]);
    }
    
    dfs(0, 0)
    return answer;
}