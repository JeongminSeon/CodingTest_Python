function solution(s) {
    if(s === "1") return [0,0];
    
    let count_Z = 0;
    let count = 0; // 이진 변환 횟수
    
    
    while(s !== '1') {
        let str = s.split("0").join("");
        count_Z += s.length - str.length;
        s = str.length.toString(2);
        count++;
    }
    
    return [count, count_Z];
}