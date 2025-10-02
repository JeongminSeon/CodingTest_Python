function solution(n) {
    let dp = [1, 2];
    
    for(let i = 2; i <= n-1; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }
    
    return dp[n-1];
}

