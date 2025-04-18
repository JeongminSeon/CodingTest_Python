function solution(s, n) {
  let result = "";

  for (let ch of s) {
    const code = ch.charCodeAt(0);

    if (ch === " ") {
      result += " ";
    } else if (ch >= "A" && ch <= "Z") {
      // 대문자
      result += String.fromCharCode((code - 65 + n) % 26 + 65);
    } else if (ch >= "a" && ch <= "z") {
      // 소문자
      result += String.fromCharCode((code - 97 + n) % 26 + 97);
    }
  }

  return result;
}
