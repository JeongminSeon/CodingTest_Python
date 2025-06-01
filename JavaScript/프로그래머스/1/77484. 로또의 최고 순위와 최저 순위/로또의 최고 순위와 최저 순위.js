function solution(lottos, win_nums) {
    
    let zero = 0; // 0의 숫자 카운트
    let lotto = 0; // 맞은 개수
    
    for(let i = 0; i < 6; i++) {
        if(lottos[i] === 0) {
            zero++;
        } else {
            if(win_nums.includes(lottos[i])){
                lotto++;
            }
        }
    }
    
    if(zero === 0 && lotto === 0) return [6,6];
    
    return [7 - zero - lotto, zero === 6 ? 6 : 6 - lotto + 1];
}