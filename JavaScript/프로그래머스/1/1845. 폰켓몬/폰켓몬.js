function solution(nums) {
    let map = new Map();
    
    const n = nums.length / 2;
    
    for(const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    return map.size >= n ? n : map.size;
}