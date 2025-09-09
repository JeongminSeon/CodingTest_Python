function solution(s){
    let stack = [];
    for(let letter of s) {
        if(letter === '(') {
            stack.push('(');
        } else {
            if(stack.length === 0) return false;
            
            let pop = stack.pop();
            
            if(pop === ')') return false;
        }
    }
    
    return stack.length === 0;
}