function solution(price, money, count) {
    
    let ticket = Array.from({length : count}, (_, i) => i+1).reduce((acc, cur) => acc + cur * price,0);

    let answer = money - ticket ;
    return answer > 0 ? 0 : Math.abs(answer);
}