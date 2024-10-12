/**
 * @param {string[]} id_list : 사용자의 아이디 목록
 * @param {string[]} report : 각 이용자가 신고한 아이디 목록
 * @param {number} k : 정지 기준 회수
 */
function solution_me(id_list, report, k) {
  const reportObj = {};
  const reportCount = {};

  for (const id of id_list) {
    reportObj[id] = [];
    reportCount[id] = 0;
  }

  for (const r of report) {
    const [from, to] = r.split(" ");
    reportObj[to].push(from);
  }

  for (const report in reportObj) {
    const reportedUsers = reportObj[report];
    if (reportedUsers.length >= k) {
      for (const item of reportedUsers) {
        reportCount[item] += 1;
      }
    }
  }

  return Object.values(reportCount);
}

/**
 * @param {string[]} id_list : 사용자의 아이디 목록
 * @param {string[]} report : 각 이용자가 신고한 아이디 목록
 * @param {number} k : 정지 기준 회수
 */
function solution(id_list, report, k) {
  const reportedUsers = {};
  const count = {};

  for (const r of report) {
    const [userId, reportedId] = r.split(" ");
    if (reportedUsers[reportedId] === undefined) {
      reportedUsers[reportedId] = new Set();
    }

    reportedUsers[reportedId].add(userId);
  }

  for (const reportedId of Object.keys(reportedUsers)) {
    if (reportedUsers[reportedId].size >= k) {
      for (const uid of reportedUsers[reportedId]) {
        count[uid] = (count[uid] || 0) + 1;
      }
    }
  }

  const answer = [];
  for (let i = 0; i < id_list.length; i++) {
    answer.push(count[id_list[i]] || 0);
  }

  return answer;
}

const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;

console.log(solution_me(id_list, report, k));
console.log(solution(id_list, report, k));
