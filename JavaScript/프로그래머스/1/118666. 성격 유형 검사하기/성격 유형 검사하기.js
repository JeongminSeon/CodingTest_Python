function solution(survey, choices) {
    let answer = '';
    let N = survey.length;
    
    let hash = {
        'R' : 0,
        'T' : 0,
        'C' : 0,
        'F' : 0,
        'J' : 0,
        'M' : 0,
        'A' : 0,
        'N' : 0,
    }; // 해쉬 테이블 생성
    
    for(let i = 0; i < N; i++) {
        let first_letter = survey[i].slice(0,1);
        let second_letter = survey[i].slice(1);
        
        if(choices[i] > 4){
            hash[second_letter] = (hash[second_letter] || 0) + choices[i] % 4;
        } else if(choices[i] < 4) {
            hash[first_letter] = (hash[first_letter] || 0) + 4 - choices[i];
        } else {
            continue;
        }
    }
    
    hash['R'] >= hash['T'] ? answer += 'R' : answer += 'T';
    hash['C'] >= hash['F'] ? answer += 'C' : answer += 'F';
    hash['J'] >= hash['M'] ? answer += 'J' : answer += 'M';
    hash['A'] >= hash['N'] ? answer += 'A' : answer += 'N';
    
    return answer;
}