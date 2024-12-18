function solution(my_string) {
    let number = '';
    let numbers = [];
    
    for (let i = 0; i < my_string.length; i++) {
        if (!isNaN(my_string[i]) && my_string[i] !== ' ') { // 숫자인 경우
            number += my_string[i];
        } else { // 숫자가 끝난 경우
            if (number) {
                numbers.push(Number(number));
                number = '';
            }
        }
    }

    // 마지막 숫자 처리
    if (number) {
        numbers.push(Number(number));
    }

    return numbers.reduce((acc, cur) => acc + cur, 0);
}
