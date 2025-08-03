function solution(n, lost, reserve) {
    // 겹치는 사람 제거
    const realLost = lost.filter(l => !reserve.includes(l));
    const realReserve = reserve.filter(r => !lost.includes(r));

    let result = n - realLost.length;
    
    realLost.sort((a, b) => a - b);
    realReserve.sort((a, b) => a - b);

    for (let l of realLost) {
        if (realReserve.includes(l - 1)) {
            result++;
            realReserve.splice(realReserve.indexOf(l - 1), 1);
        } else if (realReserve.includes(l + 1)) {
            result++;
            realReserve.splice(realReserve.indexOf(l + 1), 1);
        }
    }

    return result;
}
