// [입력]
// 첫째 줄에는 초기에 편집기에 입력되어 있는 문자열이 주어진다.
// 이 문자열은 길이가 N이고, 영어 소문자로만 이루어져 있으며, 길이는 100,000을 넘지 않는다.
// 둘째 줄에는 입력할 명령어의 개수를 나타내는 정수 M(1 ≤ M ≤ 500,000)이 주어진다.
// 셋째 줄부터 M개의 줄에 걸쳐 입력할 명령어가 순서대로 주어진다.
// 명령어는 위의 네 가지 중 하나의 형태로만 주어진다.

// [출력]
// 첫째 줄에 모든 명령어를 수행하고 난 후 편집기에 입력되어 있는 문자열을 출력한다.

fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

// 스택 2개 (커서를 기준으로 왼쪽 스택&오른쪽 스택) 또는 // 연결리스트

const sol = () => {
  const str = input[0].trim();
  const n = Number(input[1]);
  const linkedList = new LinkedList();
  linkedList.init();

  for (const c of str) {
    linkedList.P(c);
  }

  for (let i = 2; i < n + 2; i++) {
    const cd = input[i].trim().split(" ");

    switch (cd[0]) {
      case "L":
        linkedList.L();
        break;
      case "D":
        linkedList.D();
        break;
      case "B":
        linkedList.B();
        break;
      case "P":
        linkedList.P(cd[1]);
        break;
    }
  }
  console.log(linkedList.show().reverse().join(""));
};

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.pre = null;
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
  L() {
    // 커서를 왼쪽으로 한 칸
    if (this.cursor.pre == null) return;
    this.cursor = this.cursor.pre;
  }
  D() {
    // 커서를 오른쪽으로 한 칸
    if (this.cursor.next == null) return;
    this.cursor = this.cursor.next;
  }
  B() {
    // 커서 왼쪽에 있는 문자를 삭제
    if (this.cursor.pre == null) return;
    let delNode = this.cursor.pre; // 삭제할 노드
    if (delNode.pre != null) delNode.pre.next = delNode.next;
    if (delNode.next != null) delNode.next.pre = delNode.pre;
  }
  P(data) {
    let newNode = new Node(data);
    newNode.next = this.cursor;
    newNode.pre = this.cursor.pre;

    if (this.cursor.pre != null) this.cursor.pre.next = newNode;

    this.cursor.pre = newNode;
  }
  show() {
    let ans = [];
    let showNode = this.head.pre;
    while (!!showNode) {
      ans.push(showNode.data);
      showNode = showNode.pre;
    }
    return ans;
  }
}

sol();
