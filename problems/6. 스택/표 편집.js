// TODO: 또 보기

/** 커맨드 목록 */
const UP = "U";
const DOWN = "D";
const DELETE_AND_PICK_DOWN_OR_UP = "C";
const UNDO = "Z";

/**
 * @param {number} n : 행의 수
 * @param {number} k : 열의 수
 * @param {string[]} cmd : 문서를 조작할 커맨드 목록
 */
function solution(n, k, cmd) {
  // 삭제할 행들의 번호를 저장하는 스택
  const deleted = [];

  const up = [...new Array(n + 2)].map((_, i) => i - 1);
  const down = [...new Array(n + 1)].map((_, i) => i + 1);

  k += 1;

  for (const item of cmd) {
    if (item[0] === DELETE_AND_PICK_DOWN_OR_UP) {
      deleted.push(k);
      up[down[k]] = up[k];
      down[up[k]] = down[k];
      k = n < down[k] ? up[k] : down[k];
    } else if (item[0] === UNDO) {
      const restore = deleted.pop();
      down[up[restore]] = restore;
      up[down[restore]] = restore;
    } else {
      const [action, num] = item.split(" ");
      if (action === UP) {
        for (let i = 0; i < num; i++) {
          k = down[k];
        }
      } else {
        for (let i = 0; i < num; i++) {
          k = down[k];
        }
      }
    }
  }

  const answer = new Array(n).fill("O");
  for (const i of deleted) {
    answer[i - 1] = "X";
  }

  return answer;
}

console.log(
  solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"])
);
