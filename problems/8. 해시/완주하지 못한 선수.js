/**
 * @param {string[]} participants : 참여한 선수들의 이름
 * @param {string[]} completions : 완주한 선수들 이름
 * @returns 완주 못한 선수 이름
 */
function solution(participants, completions) {
  const obj = {};
  for (const participant of participants) {
    obj[participant] = obj[participant] ?? 0 + 1;
  }

  for (const completion of completions) {
    if (obj[completion]) {
      obj[completion] -= 1;
    }
  }

  const result = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value > 0) {
      result.push(key);
    }
  }

  return result;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // ["leo"]
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "fillpa"],
    ["josipa", "fillpa", "marina", "nikola"]
  )
); // ["vinko"]
