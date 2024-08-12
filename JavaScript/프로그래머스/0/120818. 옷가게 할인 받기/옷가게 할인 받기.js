function solution(price) {
    let answer = 0;

    // 50만 원 이상일 때 20% 할인
    if (price >= 500000) {
        answer = price * 0.8;
    } 
    // 30만 원 이상일 때 10% 할인
    else if (price >= 300000) {
        answer = price * 0.9;
    } 
    // 10만 원 이상일 때 5% 할인
    else if (price >= 100000) {
        answer = price * 0.95;
    } 
    // 그 외 (10만 원 미만)에는 할인 없음
    else {
        answer = price;
    }

    // 소수점 이하는 버림
    return Math.floor(answer);
}