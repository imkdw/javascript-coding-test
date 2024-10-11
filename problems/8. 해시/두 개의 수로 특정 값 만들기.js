function countSort(arr, k) {
  const hashtable = new Array(k + 1).fill(0);
  for (const num of arr) {
    if (num <= k) {
      hashtable[num] = 1;
    }
  }

  return hashtable;
}

/**
 *
 * @param {number[]} arr
 * @param {number} target
 */
function solution(arr, target) {
  const hashtable = countSort(arr, target);
  for (const num of arr) {
    const complement = target - num;

    if (
      complement !== num &&
      complement >= 0 &&
      complement <= target &&
      hashtable[complement] === 1
    ) {
      return true;
    }
  }

  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6));
console.log(solution([2, 3, 5, 9], 10));
