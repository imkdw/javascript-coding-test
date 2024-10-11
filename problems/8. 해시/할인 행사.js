function isShallowEqual(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (const key of obj1Keys) {
    const value1 = obj1Keys[key];
    const value2 = obj2Keys[key];

    if (value1 !== value2) {
      return false;
    }
  }

  return true;
}

function createWantObj(want, numbers) {
  const wantObj = {};

  want.forEach((item, index) => {
    wantObj[item] = numbers[index];
  });

  return wantObj;
}

/**
 * @param {string[]} wants - 구매하기 원하는 제품
 * @param {number[]} numbers - wants를 얼마나 사고싶은지, wants랑 1:1로 매핑
 * @param {string[]} discounts - 매일 할인하는 제품 목록
 *
 * @returns 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 때 회원가입
 */
function solution(wants, numbers, discounts) {
  const wantObj = createWantObj(wants, numbers);
  let answer = 0;

  // 특정일 i에 회원가입하면 할인받을수 있는 품목
  for (let i = 0; i < discounts.length - 9; i++) {
    const discount10d = {};

    for (let j = i; j < i + 10; j++) {
      if (wantObj[discounts[j]]) {
        discount10d[discounts[j]] = (discount10d[discounts[j]] || 0) + 1;
      }
    }

    if (isShallowEqual(discount10d, wantObj)) {
      answer += 1;
    }
  }

  return answer;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
