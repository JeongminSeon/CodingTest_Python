function solution(k, tangerine) {
    let arr = [];
    let answer = 0;
    let count = 0;
    
    for(let t of tangerine) {
        if(arr[t-1] === undefined) {
            arr[t-1] = [];
            arr[t-1][0] = t;
            arr[t-1][1] = 1;
        } else {
            arr[t-1][1]++;
        }
    }
    
    arr.sort((a, b) => b[1] - a[1]);
    
    while(count < k) {
        if(arr[answer][1] === 0) {
            answer++;
            continue;
        }
        
        count++;
        arr[answer][1]--;
    }
    
    return answer+1;
}