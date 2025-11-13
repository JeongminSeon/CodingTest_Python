function solution(N, number) {
    let answer = 0;
    
    const dp = new Array(9).fill(null).map(() => new Set());
    
    /* dp[i] = N을 i번 사용한 집합
       dp[1] = 5;
       dp[2] = 55, 5 - 5, 5 + 5, 5 * 5, 5 / 5;
       dp[3] = 555, dp[2] op dp[1] , dp[1] op dp[2] ;
       dp[4] = 5555, dp[3] op dp[1] ,  dp[2] op dp[2], dp[1] op dp[3] 
    */
    
    for(let i = 1; i <= 8; i++) {
        dp[i].add(Number(String(N).repeat(i)));
        
        for(let j = i - 1; j >= 1; j--) {
            const k = i - j;
            
            for(const a of dp[j]) {
                for(const b of dp[k]) {
                    dp[i].add(a - b);
                    dp[i].add(a + b);
                    dp[i].add(a * b);
                    
                    if(dp[k] !== 0) {
                        dp[i].add(Math.floor(a / b));
                    }
                }
            }
        }
        
        if(dp[i].has(number)) {
            return i;
        }
    }
    
    return -1;
}