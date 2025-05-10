function solution(dartResult) {
    let scores = []; // 계산해서 arr 쑤셔박기;
    let num = ''; 
    for(let i = 0; i < dartResult.length; i++) {
        let ch = dartResult[i];
        
        if(!isNaN(ch)){
            num += ch;
        } else if (ch === 'S' || ch === 'D' || ch === 'T') {
            num = Number(num);
            if(ch === 'D') num = num ** 2;
            if(ch === 'T') num = num ** 3;
            scores.push(num);
            num = ''; // num 초기화
        } else if (ch === '*') {
            let len = scores.length;
            if(len >= 2) scores[len-2] *= 2; // 앞에 숫자가 있으면, *2 해줌
            scores[len-1] *= 2;
        } else if (ch === '#') {
            scores[scores.length - 1] *= -1;
        }
    }
    
    return scores.reduce((acc, cur) => acc + cur, 0);
}