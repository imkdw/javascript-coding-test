/**
 * @param {string[]} cards1
 * @param {string[]} cards2
 * @param {string[]} goal
 */
class Queue {
  constructor(array) {
    this.items = array ?? [];
    this.front = 0;
    this.rear = this.items.length;
  }

  push(item) {
    this.rear++;
    this.items.push(item);
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.rear === this.front;
  }
}

function solution(cards1, cards2, goal) {
  const result = [];
  const card1Queue = new Queue(cards1);
  const card2Queue = new Queue(cards2);
  const goalQueue = new Queue(goal);

  result.push(card1Queue.pop());
  result.push(card2Queue.pop());
  result.push(card2Queue.pop());

  while (!card1Queue.isEmpty()) {
    result.push(card1Queue.pop());
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] !== goalQueue.pop()) {
      return false;
    }
  }

  return true;
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);

console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
