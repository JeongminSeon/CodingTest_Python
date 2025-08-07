function solution(new_id) {
    let answer = '';
    
    for(let id of new_id) {
        if(id >= 'A' && id <= 'Z') {
            answer += id.toLowerCase();
        } else if(id >= 'a' && id <= 'z' 
                  || id >= '0' && id <= '9'
                  || id === '-' || id === '_' || id === '.') {
            answer += id;
        }
    }
    
    let temp = '';
    
    for(let i = 0; i < answer.length; i++) {
        if(answer[i] === '.' && temp[temp.length - 1] === '.') {
            continue;
        } else {
            temp += answer[i];
        }
    }
    
    answer = temp;
    
    if(answer[0] === '.') answer = answer.slice(1);
    if(answer[answer.length - 1] === '.') answer = answer.slice(0, -1);
    
    if(answer.length === 0) answer += 'a';
    
    if(answer.length >= 16) {
        answer = answer.slice(0, 15);
    }
    
    if(answer[answer.length - 1] === '.') answer = answer.slice(0, -1);
    
    while(answer.length < 3) {
        answer += answer[answer.length - 1];
    }
    
    return answer;
}