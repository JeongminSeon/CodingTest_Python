function solution(numbers, k) {
    let index = (k-1) * 2 % numbers.length;
    return numbers[index];
}