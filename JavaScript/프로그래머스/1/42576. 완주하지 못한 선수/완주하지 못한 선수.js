function solution(participant, completion) {
    let answer = '';
    let hash = {};
    
    for(const p of participant) {
        if(!hash[p]) {
            hash[p] = 1;
        } else {
            hash[p]+=1;
        }
    }
    
    
    for(const p of completion) {
        hash[p] -= 1;
    }
    
    for(const key in hash) {
        if(hash[key] !== 0) {
            return key;
        }
    }
    
}