function solution(my_string) {
    let answer = my_string.split("").filter((s) => !isNaN(s)).map((n) => Number(n)).reduce((acc, currentValue) => acc + currentValue, 0);
    return answer;
}