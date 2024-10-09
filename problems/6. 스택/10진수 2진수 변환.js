/**
 * @param {number} demical : 10진수
 * @returns demical을 2진수로 변환한 값
 */
function solution(demical) {
  const stack = [];

  while (demical > 0) {
    const remainder = demical % 2;
    stack.push(remainder);
    demical = Math.floor(demical / 2);
  }

  let result = "";
  while (stack.length > 0) {
    result += stack.pop();
  }

  return result;
}

console.log(solution(10)); // 1010
console.log(solution(27)); // 11011
console.log(solution(12345)); // 11000000111001
