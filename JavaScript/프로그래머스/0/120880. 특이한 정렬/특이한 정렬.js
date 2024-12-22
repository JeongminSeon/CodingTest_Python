function solution(numlist, n) {
    return numlist
        .sort((a, b) => {
            // 거리 기준으로 정렬 (오름차순), 거리가 같다면 큰 수가 앞으로
            const distanceA = Math.abs(a - n);
            const distanceB = Math.abs(b - n);

            if (distanceA === distanceB) return b - a; // 거리 같으면 큰 수 우선
            return distanceA - distanceB; // 거리 기준 정렬
        });
}
