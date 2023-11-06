fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

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
  delete() {
    if (this.cursor.left !== null) {
      let delNode = this.cursor.left;
      if (delNode.left !== null) delNode.left.right = delNode.right;
      if (delNode.right !== null) delNode.right.left = delNode.left;
    }
  }
  goLeft() {
    // 왼쪽으로 1만큼 이동
    if (this.cursor.left !== null) this.cursor = this.cursor.left;
  }
  goRight() {
    // 오른쪽으로 1만큼 이동
    if (this.cursor.right !== null) this.cursor = this.cursor.right;
  }
  add(data) {
    let newNode = new Node(data);
    newNode.right = this.cursor;
    newNode.left = this.cursor.left;

    if (this.cursor.left !== null) this.cursor.left.right = newNode;
    this.cursor.left = newNode;
  }
  show() {
    let ans = [];
    let showNode = this.head.left;
    while (!!showNode) {
      ans.push(showNode.data);
      showNode = showNode.left;
    }
    return ans;
  }
}

const n = Number(input[0]);
let cmd = [];

for (let i = 0; i < n; i++) {
  cmd[i] = input[i + 1].toString().trim().split("");

  const linkedList = new LinkedList();
  linkedList.init();

  for (let j = 0; j < cmd[i].length; j++) {
    switch (cmd[i][j]) {
      case "-":
        linkedList.delete();
        break;
      case "<":
        linkedList.goLeft();
        break;
      case ">":
        linkedList.goRight();
        break;
      default:
        linkedList.add(cmd[i][j]);
    }
  }
  console.log(linkedList.show().reverse().join(""));
}
