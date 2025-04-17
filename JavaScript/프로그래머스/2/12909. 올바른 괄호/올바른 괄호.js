function solution(s){
    let stack = [];
    
    for(let item of s) {
        if(item === "(") {
            stack.push(1);
        } else {
            if(stack.length === 0) return false;
            stack.pop();
        }
    }

    return stack.length === 0;
}