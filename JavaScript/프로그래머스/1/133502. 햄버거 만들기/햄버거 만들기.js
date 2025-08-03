function solution(ingredient) {
    let answer = 0;
    const stack = [];

    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);

        // 스택의 마지막 4개가 [1,2,3,1]이면 제거하고 햄버거++
        if (
            stack.length >= 4 &&
            stack[stack.length - 4] === 1 &&
            stack[stack.length - 3] === 2 &&
            stack[stack.length - 2] === 3 &&
            stack[stack.length - 1] === 1
        ) {
            // 햄버거 완성 → 4개 제거
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            answer++;
        }
    }

    return answer;
}
