function solution(A,B){
    A.sort((a,b) => a - b);
    B.sort((a,b) => b - a);
    return A.reduce((acc, val, i) => acc + val * B[i], 0);
}