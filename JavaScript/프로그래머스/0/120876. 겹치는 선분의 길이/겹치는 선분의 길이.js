function cal(p1, p2) {
    // 두 선분의 교집합 계산
    if (p1[0] >= p2[1] || p1[1] <= p2[0]) return [0, 0];
    return [Math.max(p1[0], p2[0]), Math.min(p1[1], p2[1])];
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