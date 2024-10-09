/**
 * 좌표를 벗어나는지 체크함
 * @param {number} nx
 * @param {number} ny
 */
const isValidMove = (nx, ny) => {
  return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
};

/**
 * 다음 좌표 결정
 */
function updateLocation(x, y, dir) {
  switch (dir) {
    case "U":
      return [x, y + 1];
    case "D":
      return [x, y - 1];
    case "R":
      return [x + 1, y];
    case "L":
      return [x - 1, y];
  }
}

/**
 * @param {string} dirs: 걸어갈 커맨드
 * @returns 처음 가보는 길들의 카운트
 */
function solution(dirs) {
  let x = 0;
  let y = 0;

  const visited = new Map();
  for (const dir of dirs) {
    const [nx, ny] = updateLocation(x, y, dir);

    if (!isValidMove(nx, y)) {
      continue;
    }

    visited.set(`${x}${y}${nx}${ny}`);
    visited.set(`${nx}${ny}${x}${y}`);

    [x, y] = [nx, ny];
  }

  return visited.size / 2;
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLLU")); // 7
