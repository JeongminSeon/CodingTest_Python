function solution(array, n) {
    let answer = 0;
    let min = Infinity; // 초기값을 아주 큰 값으로 설정
    
    for (let i = 0; i < array.length; i++) {
        const diff = Math.abs(n - array[i]); // 차이 계산
        if (diff < min || (diff === min && array[i] < answer)) {
            min = diff;
            answer = array[i];
        }
    }
    
    return answer;
}
