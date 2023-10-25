// https://www.acmicpc.net/problem/2263
// [입력]
// 첫째 줄에 n(1 ≤ n ≤ 100,000)이 주어진다.
// 다음 줄에는 인오더를 나타내는 n개의 자연수가 주어지고,
// 그 다음 줄에는 같은 식으로 포스트오더가 주어진다.

// [출력]
// 첫째 줄에 프리오더를 출력한다.

// 2 1 3

const fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

const n = Number(input.shift());
const inorder = input.shift().split(" ").map(Number);
const postorder = input.shift().split(" ").map(Number);

let result = "";
const preorder = (istart, iend, pstart, pend) => {
  // while + 위에 조건 거꾸로 조합은 무한 루프 ㅠㅠㅠ
  if (istart > iend || pstart > pend) {
    return;
  }
  const root = postorder[pend];
  const rootIndex = inorder.indexOf(root); // 이걸 for루프 돌려서 찾을 뻔 했자냐~헐~

  result += root + " ";

  const leftSize = rootIndex - istart;
  const rightSize = iend - rootIndex;

  // 왼쪽 탐색
  preorder(istart, istart + leftSize - 1, pstart, pstart + leftSize - 1);
  // 왼쪽 끝나면(-> start관련변수 쓰지말고 end관련변수 사용해서 연산) 오른쪽 탐색
  preorder(iend - rightSize + 1, iend, pend - rightSize, pend - 1);
};

// 중위순회, 후위순회 결과를 인수로 받아서 연산해야되니까
// 각각의 순회 결과리스트의 요소 넘버 인수로 보내기

// preorder함수 재귀반복이 2번 반복되니까! if문 안에서 result 반환하면 안되는 것
// 왼쪽 리스트 재귀바복 끝난 뒤에 또 오른쪽 리스트 재귀반복함. 꼼꼼하게 보기!!
preorder(0, n - 1, 0, n - 1);
console.log(result);
