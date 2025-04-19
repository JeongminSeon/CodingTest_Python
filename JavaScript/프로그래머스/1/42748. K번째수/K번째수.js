function solution(array, commands) {
    let answer = [];
    
    for(let command of commands) {
        let i = command[0];
        let j = command[1];
        let k = command[2];
        let sorted = array.slice(i-1, j).sort((a,b) => a - b);
        answer.push(sorted[k-1]);
    }
    
    return answer;
    // return commands.map((c) => array.slice(c[0] - 1, c[1]).sort((a,b) => a - b)[c[2]-1])
    
}