function solution(my_string, letter) {
    let ans = [...my_string].filter((i) => i !== letter).join("");
    return ans;
}