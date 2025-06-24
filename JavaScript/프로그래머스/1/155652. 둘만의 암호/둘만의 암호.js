function solution(s, skip, index) {
    let skip_array = skip.split("");
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz"].filter((item) => !skip_array.includes(item));
    
    let answer = "";
    for(let ch of s) {
        let new_index = index + alphabet.indexOf(ch);
        console.log(new_index);
        if(new_index >= alphabet.length) {
            new_index %= alphabet.length;
        }
        answer += alphabet[new_index];
    }
    
    return answer;
}