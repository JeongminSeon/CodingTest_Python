function solution(word) {
    const dictionary = [];
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    
    function generate(currentWord) {
        if(currentWord.length > 5){
            return;
        }
        
        if(currentWord !== "") {
            dictionary.push(currentWord);
        }
        
        for(let vowel of vowels) {
            generate(currentWord + vowel);
        }
    }
    
    generate("");
    
    return dictionary.indexOf(word) + 1;
}