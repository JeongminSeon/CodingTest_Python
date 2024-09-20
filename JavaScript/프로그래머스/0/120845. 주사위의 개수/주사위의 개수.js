function solution(box, n) {
    let width = box[0];
    let length = box[1];
    let height = box[2];
    
    let total = 1;
    for(let value of box) {
        total *= Math.floor(value / n);   
    }
        
    return total;
}