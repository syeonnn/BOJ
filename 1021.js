// 백준 1021 회전하는 큐

const fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

class Deque {
  constructor() {
    this._arr = [];
  }
  push_front(data) {
    this._arr.unshift(data);
  }
  push_back(data) {
    this._arr.push(data);
  }
  size() {
    return this._arr.length;
  }
  front() {
    return this._arr[0];
  }
  back() {
    return this._arr[this.size() - 1];
  }
  findIndex(data) {
    return this._arr.indexOf(data);
  }
  pop_front() {
    return this._arr.shift();
  }
  pop_back() {
    return this._arr.pop();
  }
}
// shfit, unshfit 쓰기

const [N, M] = input[0].trim().split(" ").map(Number);
//  큐의 크기 N
// 뽑아내려고 하는 수의 개수 M

const deque = new Deque();
let cnt = 0;
for (let i = 1; i <= N; i++) deque.push_back(i);
let [...arr] = input[1].trim().split(" ").map(Number);

for (let i = 0; i < M; i++) {
  let idx = deque.findIndex(arr[i]);
  while (deque.front() !== arr[i]) {
    if (deque.size() - idx < idx) {
      deque.push_front(deque.back());
      deque.pop_back();
    } else {
      deque.push_back(deque.front());
      deque.pop_front();
    }
    cnt++;
  }
  deque.pop_front();
}

console.log(cnt);

// 뽑아내려고 하는 수의 위치 배열

// 해당 수의 인덱스 찾기.

// 현재 큐의 front 값으로부터 왼쪽으로?오른쪽으로?갈지 선택
// 큐의 길이-그 타겟 인덱스값 < 현인덱스=0-타겟 인덱스값
// 오른쪽으로 이동 = push_front(queue.back())
// *** push_front한 값 = queue.front()값 제거

// 그 반대면
// 왼쪽으로 이동 = push_back(queue.front())
//*** push_back 값 = queue.back()값 제거
