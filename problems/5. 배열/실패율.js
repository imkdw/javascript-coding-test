/**
 * @param {number} n : 전체 스테이지 개수
 * @param {number[]} stages: 게임을 이용하는 사용자들이 멈춰있는 스테이지
 * @returns 실패율이 높은 스테이지부터 내림차순으로 스테이지 번호 담겨있는 배열
 */
function solution(n, stages) {
  const challenge = new Array(n + 2).fill(0);
  for (const stage of stages) {
    challenge[stage] += 1;
  }

  const fails = {};
  let total = stages.length;

  for (let i = 1; i <= n; i++) {
    if (challenge[i] === 0) {
      fails[i] = 0;
      continue;
    }

    fails[i] = challenge[i] / total;
    total -= challenge[i];
  }

  return Object.entries(fails)
    .sort((a, b) => b[1] - a[1])
    .map((item) => +item[0]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3, 4, 2, 1, 5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4, 1, 2, 3]
