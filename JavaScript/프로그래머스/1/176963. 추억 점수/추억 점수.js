function solution(name, yearning, photo) {
    var answer = [];
    
    for(let i = 0; i < photo.length; i++) {
        let sum = 0;
        
        for(let item of photo[i]) {
            let index = name.indexOf(item);
            if(index !== -1) {
                sum += yearning[index];
            }
        }
        
        answer.push(sum);
    
    }
    return answer;
}