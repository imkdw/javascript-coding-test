export class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  push(key) {
    this.items.push(key);
    this.rear += 1;
  }

  pop() {
    return this.items[this.front--];
  }

  isEmpty() {
    return this.rear === this.front;
  }
}
