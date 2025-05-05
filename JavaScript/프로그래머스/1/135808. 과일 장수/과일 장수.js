function solution(k, m, score) {
    
    score.sort((a,b) => b - a);
    
    let index = Math.floor(score.length / m ) * m;
    
    let box = [];
    let sum = 0;
    for(let i = 0; i < index; i++){
        
        box.push(score[i]);
        
        if(box.length === m) {
            let min = Math.min(...box);
            sum += min * m;
            box = [];
        }  
        
    }
    
    return sum;
}