function solution(my_string) {
    return my_string.split("").map((item) => item.toLowerCase()).sort().join("");

}