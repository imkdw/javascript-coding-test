/**
 * @param {string} n : 괄호
 */
function solution_map(n) {
  const map = new Map();
  for (const char of n) {
    const currentValue = map.get(char) ?? 0;
    map.set(char, currentValue + 1);
  }

  return map.get("(") === map.get(")");
}

/**
 * @param {string} n : 괄호
 */
function solution_stack(n) {
  const stack = [];

  for (const char of n) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

console.log(solution_map("(())()")); // true
console.log(solution_map("((())()")); // false
console.log(solution_stack("(())()")); // true
console.log(solution_stack("((())()")); // false
