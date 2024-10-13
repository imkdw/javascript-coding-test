/**
 * @param {number} n : 게임 참가자 수
 * @param {number} a : 참가자 번호
 * @param {number} b : 경쟁자 번호
 * @returns 라운터
 */
function solution(n, a, b) {
  let result = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    result += 1;
  }

  return result;
}

console.log(solution(8, 4, 7));
