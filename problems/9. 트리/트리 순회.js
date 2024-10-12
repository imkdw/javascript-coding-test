function preorder(nodes, idx) {
  if (idx < nodes.length) {
    // 루트 노드 출력하고 왼쪽, 오른쪽 서브 트리를 재귀 호출해서 출력 순서대로 붙임
    let ret = `${nodes[idx]} `;
    ret += preorder(nodes, idx * 2 + 1);
    ret += preorder(nodes, idx * 2 + 2);

    return ret;
  }

  return "";
}

function inorder(nodes, idx) {
  if (idx < nodes.length) {
    // 왼쪽 서브트리를 먼저 재귀를 통한 출력 순서대로 이어붙임
    let ret = inorder(nodes, idx * 2 + 1);
    // 루트 노드를 출력하고나서 오른쪽 서브트리를 재귀를 통한 출력 순서대로 이어붙임
    ret += `${nodes[idx]} `;
    ret += inorder(nodes, idx * 2 + 2);
    return ret;
  }

  return "";
}

function postorder(nodes, idx) {
  if (idx < nodes.length) {
    let ret = postorder(nodes, idx * 2 + 1);
    ret += postorder(nodes, idx * 2 + 2);
    ret += `${nodes[idx]} `;
    return ret;
  }

  return "";
}
/**
 * @param {number[]} nodes : 2진 트리를 표현한 배열
 */
function solution(nodes) {
  return [
    preorder(nodes, 0).slice(0, -1),
    inorder(nodes, 0).slice(0, -1),
    postorder(nodes, 0).slice(0, -1),
  ];
}

const binaryTree = [1, 2, 3, 4, 5, 6, 7];
console.log(solution(binaryTree));
