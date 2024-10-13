/**
 * @param {string[]} enroll : 각 판매원의 이름
 * @param {string[]} referral : 다단계 조직에 참여시킨 다른 판매원의 이름
 * @param {string[]} seller : 판매량 집계 데이터의 판매원 이름
 * @param {number[]} amount : 판매량 집계 데이터의 판매 수량
 */
function solution(enroll, referral, seller, amount) {
  let parent = {};

  /**
   * 추천인 목록 만들기
   */
  for (let i = 0; i < enroll.length; i++) {
    parent[enroll[i]] = referral[i];
  }

  /**
   * 판매원 이름으로 수익 객체
   */
  let total = {};
  a;
  for (const name of enroll) {
    total[name] = 0;
  }

  for (let i = 0; i < seller.length; i++) {
    let money = amount[i] * 100;
    let curName = seller[i];

    while (money > 0 && curName !== "-") {
      total[curName] += money - Math.floor(money / 10);
      curName = parent[curName];

      money = Math.floor(money / 10);
    }
  }

  return enroll.map((name) => total[name]);
}

const enroll = [
  "john",
  "mary",
  "edward",
  "sam",
  "emily",
  "jaimie",
  "tod",
  "young",
];
const referral = [
  "-",
  "-",
  "mary",
  "edward",
  "mary",
  "mary",
  "jaimie",
  "edward",
];
const seller = ["young", "john", "tod", "emily", "mary"];
const amount = [12, 4, 2, 5, 10];
console.log(solution(enroll, referral, seller, amount));
