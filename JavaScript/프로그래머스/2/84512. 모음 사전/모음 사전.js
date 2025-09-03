function solution(word) {
    const dictionary = [];
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    
    function generate(currentWord){
        if(currentWord.length > 5) {
            return; // 길이 5 초과 종료
        }
        
        if(currentWord !== "") {
            dictionary.push(currentWord);
        }
        
        for(const vowel of vowels) {
            generate(currentWord + vowel);
        }
    }
    
    generate("");
    
    return dictionary.indexOf(word) + 1;
}