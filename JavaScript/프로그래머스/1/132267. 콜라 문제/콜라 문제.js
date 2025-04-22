function solution(a, b, n) {
    // a만큼 빈병을 가져다주면 콜라 b병을 가져다 줌
    // 빈병 n 병을 가져가면 몇개 줌 ?
    let count = 0;
    while(n >= a) {
        count += Math.floor(n / a) * b;
        n = Math.floor(n / a) * b + n % a;
        console.log("콜라 병의 수는 " + n);
    }
    
    return count;
}