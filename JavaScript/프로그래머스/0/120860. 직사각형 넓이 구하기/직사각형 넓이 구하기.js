function solution(dots) {
    const dot = dots[0]; // 첫 번째 점을 기준으로 설정
    let width = 0; // 가로 길이
    let height = 0; // 세로 길이
    
    for (let i = 1; i < dots.length; i++) {
        if (dots[i][0] === dot[0]) {
            // x 좌표가 같은 경우: 세로 길이
            height = Math.abs(dots[i][1] - dot[1]);
        } else {
            // x 좌표가 다른 경우: 가로 길이
            width = Math.abs(dots[i][0] - dot[0]);
        }
    }
    
    return width * height; // 직사각형 넓이 반환
}
