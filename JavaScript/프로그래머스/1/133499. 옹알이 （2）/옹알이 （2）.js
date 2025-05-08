function solution(babbling) {
    let words = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    for(let word of babbling) {
        let str = '';
        let prev = '';
        for(let ch of word) {
            str += ch;
            if(words.indexOf(str) !== -1 && prev !== str) {
                console.log(`현재 str의 값은 ${str}임`);
                prev = str; 
                str = ''; // 초기화
            }
        }
        if(str === '') count++;
    }
    
    return count;
}