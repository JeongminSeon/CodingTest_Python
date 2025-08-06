function solution(survey, choices) {
    const types = ['RT', 'CF', 'JM', 'AN'];
    const MBTI = {};
    
    types.forEach((type) => {
        type.split("").map((t) => MBTI[t] = 0)
    })
    
    choices.forEach((choice, index) => {
        const [a, b] = survey[index];
        
        if(choice > 4) {
            MBTI[b] = MBTI[b] + Math.abs(4 - choice)    
        } else {
            MBTI[a] = MBTI[a] + 4 - choice;
        }
    })
    
    
    return types.map(([a,b]) => MBTI[a] >= MBTI[b] ? a : b).join("");
}