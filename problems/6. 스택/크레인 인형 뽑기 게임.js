/**
 * @param {number[][]} boards : 총 박스에 담긴 인형들
 * @param {number[]} moves: 인형을 잡을 위치들
 */
function solution_self(boards, moves) {
  const stacks = [];

  for (let i = 0; i < boards.length; i++) {
    const stack = [];
    for (let j = 0; j < boards[i].length; j++) {
      const doll = boards[j][i];
      if (doll) {
        stack.push(doll);
      }
    }

    stacks.push(stack.reverse());
  }

  const afterStack = [];
  let result = 0;
  for (const move of moves) {
    const currentStack = stacks[move - 1];
    if (currentStack.length) {
      const pickedDoll = currentStack.pop();
      if (afterStack[afterStack.length - 1] === pickedDoll) {
        afterStack.pop();
        result += 2;
      } else {
        afterStack.push(pickedDoll);
      }
    }
  }

  return result;
}

/**
 * @param {number[][]} boards : 총 박스에 담긴 인형들
 * @param {number[]} moves: 인형을 잡을 위치들
 */
function solution(boards, moves) {
  // 각 열의 스택 생성
  const lanes = [...Array(boards[0].length)].map(() => []);

  // 각 인행의 스택 생성
  for (let i = boards.length - 1; i >= 0; i--) {
    for (let j = 0; j < boards[0].length; j++) {
      if (boards[i][j]) {
        lanes[j].push(boards[i][j]);
      }
    }
  }

  const bucket = [];

  let answer = 0;

  for (const m of moves) {
    if (lanes[m - 1].length > 0) {
      const doll = lanes[m - 1].pop();

      if (bucket.length > 0 && bucket[bucket.length - 1] === doll) {
        bucket.pop();
        answer += 2;
      } else {
        bucket.push(doll);
      }
    }
  }

  return answer;
}

console.log(
  solution_self(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
