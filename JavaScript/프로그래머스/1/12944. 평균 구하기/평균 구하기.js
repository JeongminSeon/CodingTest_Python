function solution(arr) {
    let length = arr.length;
    
    return arr.reduce((acc, cur) => acc + cur, 0) / length;
}