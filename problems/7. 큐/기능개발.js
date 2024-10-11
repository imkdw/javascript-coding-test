/**
 * @param {number[]} progresses
 * @param {number[]} speeds
 */
function solution(progresses, speeds) {
  const answer = [];
  const daysLeft = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  let count = 0;
  let maxDay = daysLeft[0];

  for (let i = 0; i < progresses.length; i++) {
    if (daysLeft[i] <= maxDay) {
      count += 1;
    } else {
      answer.push(count);
      count = 1;
      maxDay = daysLeft[i];
    }
  }

  answer.push(count);
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
