function solution(n) {
    let answer = n+1;
    let count = n.toString(2).split("1").length - 1;

    while(1) {
        let count2 = answer.toString(2).split("1").length - 1;
        if(count === count2) return answer;
        answer++;
    }
}