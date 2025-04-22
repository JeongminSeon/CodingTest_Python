function solution(n) {
    let count = 0;
    for (let k = 1; k * (k - 1) / 2 < n; k++) {
        let numerator = n - (k * (k - 1)) / 2;
        if (numerator % k === 0) {
            count++;  // x가 정수라는 뜻!
        }
    }
    
    return count;
}