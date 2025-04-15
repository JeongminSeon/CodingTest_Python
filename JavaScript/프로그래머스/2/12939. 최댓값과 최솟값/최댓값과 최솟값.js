function solution(s) {
    let arr = s.split(" ");
    
    let max = -Infinity;
    let min = Infinity;
    // 스프레드 연산자로 구할 수도 있음 Math.max([...arr]);
    for(let num of arr) {
        max = Math.max(max, num);
        min = Math.min(min, num);
    }
    
    return `${min} ${max}`;
}