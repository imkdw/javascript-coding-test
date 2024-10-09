/**
 * @param {string} s : 괄호들
 */
function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    let isCorrect = true;

    for (let j = 0; j < s.length; j++) {
      const c = s[(i + j) % s.length];

      if (c === "[" || c === "{" || c === "(") {
        stack.push(c);
      } else {
        if (stack.length === 0) {
          isCorrect = false;
          break;
        }

        const top = stack[stack.length - 1];

        if (
          (c === "}" && top === "{") ||
          (c === ")" && top === "(") ||
          (c === "]" && top === "[")
        ) {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }

    if (isCorrect && stack.length === 0) {
      answer += 1;
    }
  }

  return answer;
}

console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0
