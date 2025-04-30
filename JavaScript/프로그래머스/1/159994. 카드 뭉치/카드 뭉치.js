function solution(cards1, cards2, goal) {
    let i = 0, j = 0, k = 0;
    
    while(k !== goal.length) {
        if(cards1[i] === goal[k]) {
            i++;
            k++;
        } else if (cards2[j] === goal[k]) {
            j++;
            k++;
        } else {
            return "No"
        }
    }
    return "Yes"
}

