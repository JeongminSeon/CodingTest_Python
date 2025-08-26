function solution(n, w, num) {
    let answer = 1;
    
    // 1. 내가 찾으려는 상자(num)의 좌표(row, col) 구하기
    const myRow = Math.floor((num - 1) / w);
    let myCol;
    
    if (myRow % 2 === 0) { // 짝수 층 (0, 2, ...)
        myCol = (num - 1) % w;
    } else { // 홀수 층 (1, 3, ...)
        myCol = (w - 1) - ((num - 1) % w);
    }
    
    // 2. 1번부터 n번까지 모든 상자를 확인
    for (let i = 1; i <= n; i++) {
        // 자기 자신은 세지 않음
        if (i === num) {
            continue;
        }
        
        // 다른 상자(i)의 좌표(targetRow, targetCol) 구하기
        const targetRow = Math.floor((i - 1) / w);
        let targetCol;
        
        if (targetRow % 2 === 0) {
            targetCol = (i - 1) % w;
        } else {
            targetCol = (w - 1) - ((i - 1) % w);
        }
        
        // 3. 조건 확인: 같은 세로줄(col)에 있으면서 더 높은 층(row)인가?
        if (targetCol === myCol && targetRow > myRow) {
            answer++; // 조건에 맞으면 카운트 증가
        }
    }
    
    return answer;
}