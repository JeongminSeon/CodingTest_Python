function solution(a, b) {
    if(a=== b) return a;
    
    let nums = Array.from({length : Math.abs(a-b) + 1 }, (_,i) => a > b ? b + i : a + i); 
    return nums.reduce((acc, val) => acc + val);
}