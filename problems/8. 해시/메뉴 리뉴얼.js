/**
 * 조합을 처리하는 함수
 * @param {any[]} arr : 배열
 * @param {number} n : 조합하는 아이템의 수
 */
function combinations(arr, n) {
  if (n === 1) {
    return arr.map((item) => [item]);
  }

  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combis = combinations(rest, n - 1);
    const combine = combis.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}

/**
 * @param {string[]} orders : 단품으로 주문한 메뉴들
 * @param {number[]} course : 코스에 포함하고 싶은 요리의 개수들
 */
function solution_me(orders, course) {
  const result = [];

  for (const c of course) {
    let courseObj = {};

    // 조합별 주문수 생성
    for (const order of orders) {
      const orderItemArray = order.split("").sort();
      const orderCombinations = combinations(orderItemArray, c);
      for (const oc of orderCombinations) {
        const ocStr = oc.join("");
        courseObj[ocStr] = (courseObj[ocStr] || 0) + 1;
      }
    }

    // 조합 별 주문수
    const sortedCourceObj = Object.entries(courseObj).sort(
      (a, b) => b[1] - a[1]
    );

    const maxOrderCount = sortedCourceObj.length ? sortedCourceObj[0][1] : 0;

    sortedCourceObj
      .filter((item) => item[1] === maxOrderCount)
      .forEach((item) => result.push(item[0]));
  }

  return result.sort();
}

/**
 * @param {string[]} orders : 단품으로 주문한 메뉴들
 * @param {number[]} course : 코스에 포함하고 싶은 요리의 개수들
 */
function solution(orders, course) {
  const answer = [];

  for (const c of course) {
    // ➊ 각 코스 요리 길이에 대해
    const menu = [];
    for (const order of orders) {
      // 모든 주문에 대해
      const orderArr = order.split("").sort(); // 주문을 배열로 만든 후 정렬
      const comb = combinations(orderArr, c); // ➋ 조합(combination)을 이용해 가능한 메뉴 구성을 모두 구함
      menu.push(...comb);
    }

    // ➌ 각 메뉴 구성이 몇 번 주문되었는지 세어줌
    const counter = {};
    for (const m of menu) {
      const key = m.join(""); // 배열을 문자열로 변환
      counter[key] = (counter[key] || 0) + 1;
    }

    const max = Math.max(...Object.values(counter));
    if (max > 1) {
      // ➍ 가장 많이 주문된 구성이 2번 이상 주문된 경우
      for (const [key, value] of Object.entries(counter)) {
        if (value === max) {
          // ➎ 가장 많이 주문된 구성을 찾아서
          answer.push(key); // ➏ 정답 리스트에 추가
        }
      }
    }
  }

  // ➐ 오름차순 정렬 후 반환
  return answer.sort();
}

const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2, 3, 4];
const orders1 = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
const course1 = [2, 3, 5];
const orders2 = ["XYZ", "XWY", "WXA"];
const course2 = [2, 3, 4];

console.log(solution_me(orders, course));
console.log(solution_me(orders1, course1));
console.log(solution_me(orders2, course2));

console.log(solution(orders, course));
console.log(solution(orders1, course1));
console.log(solution(orders2, course2));
