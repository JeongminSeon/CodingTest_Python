function solution(participant, completion) {
    const table = {};
    
    for(let name of participant) {
        if(table[name] === undefined) {
            table[name] = 1;
        } else {
            table[name]++;
        }
    }
    
    for(let name of completion) {
        table[name]--;
    }
    
    for(let name in table) {
        if(table[name] !== 0)
            return name;
    }
}