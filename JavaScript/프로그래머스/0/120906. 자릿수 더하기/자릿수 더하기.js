function solution(n) {
    return n.toString().split("").reduce((acc, val) => acc + Number(val), 0);   
}