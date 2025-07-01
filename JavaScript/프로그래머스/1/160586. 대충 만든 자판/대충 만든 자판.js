function solution(keymap, targets) {
    let dict = {} // 최소 횟수 저장
    
    keymap.forEach(key => {
        for(let i = 0; i < key.length; i++) {
            const char = key[i];
            const pressCount = i + 1;
            
            if(dict[char] === undefined) {
                dict[char] = pressCount;
            } else {
                dict[char] = Math.min(dict[char], pressCount); // 최소값
            }
        }
    })
    
    // targets를 돌면서 최소 횟수의 합을 계산
    const answer = targets.map(target => {
        let total = 0;
        for(let char of target) {
            if(dict[char] === undefined) {
                total = -1;
                break;
            }
            total += dict[char];
        }
        return total;
    });
    
    return answer;
}