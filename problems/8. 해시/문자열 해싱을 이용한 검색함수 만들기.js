/**
 * @param {string[]} arr
 * @returns
 */
function createHashMap(arr) {
  const hashMap = {};
  arr.forEach((item) => (hashMap[item] = 1));
  return hashMap;
}

/**
 * polymomial hash
 *
 * @param {string} str : 원본 키값
 */
function polynomialHash(str) {
  const p = 31; // 소수
  const m = 1_000_000_007; // 버킷의 크기
  let hashValue = 0;
  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }

  return hashValue;
}

/**
 * @param {string[]} stringList
 * @param {string[]} queryList
 */
function solution_me(stringList, queryList) {
  const result = [];
  const stringListHashMap = createHashMap(stringList);

  for (const query of queryList) {
    if (query in stringListHashMap) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

/**
 * @param {string[]} stringList
 * @param {string[]} queryList
 */
function solution(stringList, queryList) {
  const hashList = stringList.map((str) => polynomialHash(str));

  const result = [];
  for (const query of queryList) {
    const queryHash = polynomialHash(query);
    if (hashList.includes(queryHash)) {
      result.push(true);
    } else [result.push(false)];
  }

  return result;
}

console.time("1");
console.log(
  solution_me(
    ["apple", "banana", "cherry"],
    ["banana", "wiki", "melon", "apple"]
  )
);
console.timeEnd("1");

console.time("2");
console.log(
  solution(["apple", "banana", "cherry"], ["banana", "wiki", "melon", "apple"])
);
console.timeEnd("2");
