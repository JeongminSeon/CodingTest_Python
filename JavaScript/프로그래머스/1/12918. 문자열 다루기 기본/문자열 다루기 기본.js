function solution(str) {
    let arr = str.split("");
    if(arr.length !== 4 && arr.length !== 6) return false;
    
    for(let num of arr) {
        if (Number.isInteger(Number(num)) === false) return false;
    }
    
    return true;
}