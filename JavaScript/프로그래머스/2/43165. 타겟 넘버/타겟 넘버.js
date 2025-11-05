function solution(numbers, target) {
    let count = 0;
    
    function bfs(index, currentSum) {
        // 1. 종료 조건
        if(index === numbers.length) {
            if(currentSum === target) count++;
            return ;
        }
        
        // 2. 이동 규칙 명시
        // +1, -1을 하면 된다.
        
        bfs(index + 1, currentSum + numbers[index]);
        bfs(index + 1, currentSum - numbers[index]);
    }
    
    bfs(0,0);
    
    return count;
}