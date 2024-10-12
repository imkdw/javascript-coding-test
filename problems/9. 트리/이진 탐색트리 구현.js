const util = require("node:util");

class Node {
  constructor(key) {
    this.left = null;
    this.left = null;
    this.val = key;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      let curr = this.root;
      while (true) {
        if (key < curr.val) {
          if (curr.left) {
            curr = curr.left;
          } else {
            curr.left = new Node(key);
            break;
          }
        } else {
          if (curr.right) {
            curr = curr.right;
          } else {
            curr.right = new Node(key);
            break;
          }
        }
      }
    }
  }

  search(key) {
    let curr = this.root;
    while (curr && curr.val !== key) {
      if (key < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }

    return curr;
  }
}

/**
 * @param {number[]} lst
 * @param {number[]} searchList
 */
function solution(lst, searchList) {
  const bst = new BST();
  for (const key of lst) {
    bst.insert(key);
  }

  const result = [];
  for (const searchVal of searchList) {
    if (bst.search(searchVal)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

const lst1 = [5, 3, 8, 4, 2, 1, 7, 10];
const searchList1 = [1, 2, 5, 6];
console.log(solution(lst1, searchList1));
