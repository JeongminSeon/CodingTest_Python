function solution(numbers, target) {
    let count = 0;
    
    function dfs(index, currentValue) {
        // 1. 종료 조건
        if(index === numbers.length) {
            if(currentValue === target) count++;
            
            return;
        }
        
        // 2. 이동 조건
        dfs(index + 1, currentValue + numbers[index]);
        dfs(index + 1, currentValue - numbers[index]);
    }
    
    dfs(0, 0);
    return count;
}