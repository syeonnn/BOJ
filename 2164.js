// 백준 2164 카드2
// 입력
// 첫째 줄에 정수 N(1 ≤ N ≤ 500,000)이 주어진다.

// 출력
// 첫째 줄에 남게 되는 카드의 번호를 출력한다.

// *** class 만들때 문제에 필요한 함수 정확히 알고 만들기!!!!!!!!!!!!!!! ***

const fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }
  isEmpty() {
    return this.front == null && this.back == null;
  }
  frontValue() {
    return this.front.data;
  }
  enqueue(data) {
    // pop()동일
    const newNode = new Node(data);
    if (this.isEmpty()) this.front = newNode;
    else {
      this.back.next = newNode;
    }
    this.back = newNode; // 요거 뺴먹지말기!!
    this.length += 1;
  }
  dequeue() {
    // shfit()동일
    if (this.isEmpty()) return;
    const value = this.front.data;
    this.front = this.front.next;
    if (!this.front) {
      this.back = null;
    } // shift연산 후 큐 비면 empty상태만들기
    this.length -= 1;
    return value;
  }
}

const N = Number(input[0]);

let arr = new Queue(); //queue

for (let i = 1; i <= N; i++) {
  arr.enqueue(i);
}

while (arr.length !== 1) {
  arr.dequeue();
  arr.enqueue(arr.frontValue());
  arr.dequeue();
  // dequeue 순서 중요함
}
console.log(arr.dequeue());
