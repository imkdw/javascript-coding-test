// TODO: 재확인

/**
 * @param {number[]} prices : n초 간 주가를 초 단위로 기록
 */
function solution_on2(prices) {
  const result = [];
  const allSeconds = prices.length;

  for (let i = 0; i < allSeconds; i++) {
    let holdingSeconds = 0;
    const afterPrices = prices.slice(i + 1, prices[allSeconds]);
    for (const afterPrice of afterPrices) {
      if (prices[i] < afterPrice || prices[i] === afterPrice) {
        holdingSeconds += 1;
      }
    }
    result.push(holdingSeconds);
  }

  return result;
}

/**
 * @param {number[]} prices : n초 간 주가를 초 단위로 기록
 */
function solution_on(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);

  const stack = [0];
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      answer[j] = i - j;
    }

    stack.push(i);
  }

  while (stack.length > 0) {
    const j = stack.pop();
    answer[j] = n - 1 - j;
  }

  return answer;
}

console.log(solution_on2([1, 2, 3, 2, 3])); // 4 3 1 1 0
console.log(solution_on2([1, 6, 9, 5, 3, 2, 7])); // 4 3 1 1 0

console.log(solution_on([1, 2, 3, 2, 3])); // 4 3 1 1 0
console.log(solution_on([1, 6, 9, 5, 3, 2, 7])); // 4 3 1 1 0
