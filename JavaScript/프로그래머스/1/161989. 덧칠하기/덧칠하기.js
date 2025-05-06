function solution(n, m, section) {
    let count = 1;
    
    let start = section[0];
    for(let i = 1; i < section.length; i++) {
        if(start + m <= section[i]) {
            start = section[i]; // 페인트 칠할 시작점 변경
            count++;
        }
    }
    
    return count;
}