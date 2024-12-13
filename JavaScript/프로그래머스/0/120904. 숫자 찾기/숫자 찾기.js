function solution(num, k) {
    num += "";
    k += "";
    let nums = num.split("").indexOf(k);
    if(nums !== -1) {
        return nums + 1;
    }
    return nums;
}