function solution(s) {
    const nums = {
        zero : '0',
        one : '1',
        two : '2',
        three : '3',
        four : '4',
        five : '5',
        six : '6',
        seven : '7',
        eight : '8',
        nine : '9'
    }
    
    let word = '';
    let answer = '';
    
    for(let ch of s) {
        if(Number.isInteger(+ch)) answer += ch;
        else word += ch;
        
        if(word in nums) {
            answer += nums[word];
            word = '';
        }
    }
    
    return +answer;
}