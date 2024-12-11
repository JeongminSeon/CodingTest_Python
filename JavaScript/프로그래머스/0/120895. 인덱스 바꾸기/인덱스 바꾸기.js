function solution(my_string, num1, num2) {
    let str = Array.from(my_string);
    [str[num1], str[num2]] = [str[num2], str[num1]];
    return str.reduce((acc, char) => acc + char, '');
}