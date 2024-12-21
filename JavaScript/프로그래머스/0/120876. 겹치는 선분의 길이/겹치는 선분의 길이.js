function cal(p1, p2) {
    // 두 선분이 겹치지 않는 경우
    if (p1[1] <= p2[0] || p1[0] >= p2[1]) return [0, 0];

    // 교집합 계산
    const start = Math.max(p1[0], p2[0]);
    const end = Math.min(p1[1], p2[1]);

    return [start, end];
}

function length(point){
    return point[1] - point[0];
}

function solution(lines) {
    const [p1, p2, p3] = lines.sort();
    
    let l1 = cal(p1, p2);
    let l2 = cal(p2, p3);
    let l3 = cal(p1, p3);
    
    const [t1, t2] = [cal(l1, l2),cal(l2, l3)].sort();

    return length(l1) + length(l2) + length(l3) - length(t1) - length(t2);
}