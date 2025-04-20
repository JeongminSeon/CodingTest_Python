function solution(food) {
    let front = "";
    let rear = ""; 
    
    for(let i = 1; i < food.length; i++) {
        let t = Math.floor(food[i] / 2);
        
        let f = i.toString().repeat(t);
        
        front += f;
        rear = f + rear;
    }
    
    return front + "0" + rear;
}