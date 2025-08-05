function solution(board, moves) {
    let result = 0;
    let stack = [];
    let depth = [];
    
    for(let i = 0; i < board.length; i++) {
        let count = 0;
        for(let j = 0; j < board.length; j++) {
            if(board[j][i] !== 0) break;
            count++;
        }
        depth.push(count);
    }
    
        
    for(let move of moves) {
        let d = depth[move - 1];
        
        if(d !== board.length && board[d][move-1] !== 0) {
            stack.push(board[d][move -1]);
            board[d][move-1] = 0;
            depth[move-1] += 1;
        }
        
        if(stack.length >= 2 && 
           stack[stack.length - 1] === stack[stack.length -2]) {
            stack.splice(-2);
            result += 2;
        }
        
        
    }
    
    return result;
}