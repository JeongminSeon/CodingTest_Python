function solution(s)
{
    let stack = [];
    for(let char of s) {
        // stack.len - 1 => stack.top을 의미함
        if(stack.length && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.length !== 0 ? 0 : 1;
}