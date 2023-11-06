// https://www.acmicpc.net/problem/1158 요세푸스 문제
// 연결리스트로 해결 실패 (2-3일 소요)
const fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

const [N, K] = input[0].trim().split(" ").map(Number);
var cnt = 0;
// 1234567
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.cursor = null;
  }
  init() {
    this.head = new Node();
    this.cursor = this.head;
  }
  firstInsert(data) {
    let newNode = new Node(data);
    // (head) newNode cursor head (newNode)
    newNode.right = this.cursor;
    newNode.left = this.head;
    //this.head.left =
    this.head.right = newNode;
  }
  nextInsert(data) {
    let newNode = new Node(data);
    newNode.right = this.cursor;
    newNode.left = this.cursor.left;

    if (this.cursor.left !== null) this.cursor.left.right = newNode;
    this.cursor.left = newNode;
  }
  add(data) {
    const newNode = new Node(data);
    newNode.left = this.cursor.left;
    newNode.right = this.cursor;

    if (this.cursor.left !== null) this.cursor.left.right = newNode;
    this.cursor.left = newNode;
    // 1234567cursorhead
  }
  pop() {
    cnt = 0;

    if (this.cursor.left == null) return;
    let delNode = this.cursor.data;

    if (delNode.left !== null) {
      delNode.left.right = delNode.right;
      delNode.right.left = delNode.left;
    }

    return delNode.data;
  }
  next() {
    if (this.cursor.right !== null) this.cursor = this.cursor.right;

    // 노드1 노드2 노드3
    //console.log(this.cursor, this.cursor.right);
    //if (this.cursor.right == null) return;
    //this.cursor = this.cursor.right.right;
    cnt++;
    console.log(cnt);
  }
  show() {
    return ans;
  }
  goFirst() {
    for (let k = 0; k < N + 1; k++) {
      if (this.cursor.left !== this.head) this.cursor = this.cursor.left;
    }
  }
}

let arr = [];
const ans = [];

for (let i = 1; i <= N; i++) arr.push(i);
const linkedList = new LinkedList();
linkedList.init();
linkedList.firstInsert(arr[0]);
console.log(linkedList);

for (let j = 1; j < N; j++) linkedList.nextInsert(arr[j]);
//arr.forEach((i) => linkedList.add(i));
console.log(linkedList);

linkedList.next();
//goFirst();
// 커서를 맨앞으로 옮김. 첫번째 숫자의 왼편@@

console.log(arr, linkedList);

while (!!linkedList.head.left) {
  //console.log(K);
  if (cnt === K) {
    ans.push(linkedList.pop());
    cnt = 0;
  } else {
    console.log(this.cursor);
    linkedList.next();
  }
  console.log("cnt", cnt);
  console.log(linkedList.head.left);
}

console.log(ans);
console.log(ans.reverse().join(""));
