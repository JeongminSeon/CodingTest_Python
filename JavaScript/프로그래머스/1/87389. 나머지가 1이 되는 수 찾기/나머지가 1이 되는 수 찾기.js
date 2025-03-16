function solution(n) {
    if (n === 3) return 2;
    for (let i = 1; i < n; i++) {
        if(n % i === 1) return i;
    }
    
    return n;
}