function solution(numbers, hand) {
    const pos = {
        1:[0,0], 2:[0,1], 3:[0,2],
        4:[1,0], 5:[1,1], 6:[1,2],
        7:[2,0], 8:[2,1], 9:[2,2],
        '*':[3,0], 0:[3,1], '#':[3,2],
    };
    let left = '*'; let right = '#';
    let answer = '';
    
    for(let num of numbers){
        if([1,4,7].includes(num)){
            answer += 'L';
            left = num;
        }
        else if ([3,6,9].includes(num)) {
            answer += 'R';
            right = num;
        }
        else {
            const [lx, ly] = pos[left];
            const [rx, ry] = pos[right];
            const [nx, ny] = pos[num];
            
            const lDist = Math.abs(lx-nx) + Math.abs(ly-ny);
            const rDist = Math.abs(rx-nx) + Math.abs(ry-ny);
            
            if(lDist < rDist || (lDist === rDist && hand === 'left')){
                answer += 'L';
                left = num;
            } else {
                answer += 'R';
                right = num;
            }
        }
    }
    
    return answer;
}
