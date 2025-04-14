function solution(left, right) {
    let sum = 0;
    for(i = left; i <=right; i++) {
        let t = 0; // 약수의 갯수
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) {
                t++;
            }
        }
        if(t % 2 === 0) {
            sum += i;
        } else {
            sum -= i;
        }
    }
    
    return sum;
}