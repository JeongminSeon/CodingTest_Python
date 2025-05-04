function solution(nums) {
    let answer = nums.length / 2;
    let type = new Set(nums);
    
    return answer >= type.size ? type.size : answer;
}