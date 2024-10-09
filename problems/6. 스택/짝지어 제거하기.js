/**
 * @param {string} s : 문자열
 * @returns 제거 가능여부
 */
function solution(s) {
  const stack = [];

  for (const char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
    // if (stack.length === 0) {
    //   stack.push(char);
    // } else {
    //   const top = stack[stack.length - 1];
    //   if (top === char) {
    //     stack.pop();
    //   } else {
    //     stack.push(char);
    //   }
    // }
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution("baabaa")); // 1
console.log(solution("cdcd")); // 0
console.log(solution("caacbbaccabaab")); // 1
console.log(solution("aabbccdd")); // 1
