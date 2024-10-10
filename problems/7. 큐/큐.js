/**
 * shift 메소드를 사용한 방식
 *
 * FIFO 흉내는 낼 수 있지만 Array.prototype.shift()의 시간복잡도가 O(1)이 아니라 큐라곤 할 수 없음
 */
const queue = [];
queue.push(1);
queue.push(2);
queue.push(3);

const firstItem = queue.shift();
console.log(firstItem); // 1

queue.push(4);

console.log(queue.shift()); // 2

console.log("=".repeat(100));

/**
 * 배열을 이용한 방식
 */
class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.rear === this.front;
  }
}

const arrayQueue = new Queue();
arrayQueue.push(1);
arrayQueue.push(2);
arrayQueue.push(3);

console.log(arrayQueue.pop());
console.log(arrayQueue.pop());
console.log(arrayQueue.pop());

console.log(arrayQueue.isEmpty());

console.log("=".repeat(100));

/**
 * 연결 리스트 이용한 방식
 * 자바스크립트에서 직접 제공되지 않아서 구현해서 사용해야함
 */
// TODO: 연결리스트

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue2 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    const removeNode = this.head;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.size--;

    return removeNode.data;
  }

  isEmpty() {
    return this.size === 0;
  }
}
