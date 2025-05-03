function solution(number, limit, power) {
    let answer = [];
    Array.from({length : number}, (_, i) => i+1 ).forEach((num, index) => {
        let attack = getFactor(num);// 약수의 개수 = 무기 공격력
        if(attack > limit) {
            answer[index] = power;
        } else {
            answer[index] = attack;
        }
    })
    
    return answer.reduce((acc, cur) => acc + cur, 0);
}

function getFactor(n) {
    let count = 0;
    
    for(let i = 1; i * i <= n; i++) {
        if(i * i === n) count++;
        else if(n % i === 0) count += 2;
    }

    return count;
}