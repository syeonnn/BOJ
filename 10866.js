// 백준 10866 덱

// 입력
// 첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다.
// 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다.
// 문제에 나와있지 않은 명령이 주어지는 경우는 없다.

// 출력
// 출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.
const fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }
// class Deque {
//   constructor() {
//     this.length = 0;
//     this.front = null;
//     this.back = null;
//   }
//   size() {
//     return this.length;
//   }
//   empty() {
//     return this.length === 0 ? 1 : 0;
//   }
//   push_front(data) {
//     const newNode = new Node(data);
//     if (this.empty()) {
//       this.front = newNode;
//       this.back = newNode;
//     } else {
//       this.front.left = newNode;
//       newNode.right = this.front;
//       this.front = newNode;
//     }
//     this.length++;
//   }
//   push_back(data) {
//     const newNode = new Node(data);
//     if (this.empty()) this.front = newNode;
//     else this.back.right = newNode;
//     this.back = newNode;
//     this.length++;
//   }
//   pop_front() {
//     if (this.empty()) return -1;
//     const value = this.front.data;
//     this.front = this.front.right;
//     if (!this.front) this.back = null;
//     this.length--;
//     return value;
//   }
//   pop_back() {
//     if (this.empty()) return -1;
//     const value = this.back.data;
//     this.back = this.back.left;
//     if (!this.front) this.back = null;
//     this.length--;
//     return value;
//   }
//   print_front() {
//     return this.front.data || -1;
//   }
//   print_back() {
//     return this.back.data || -1;
//   }
// }

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
  pop_front() {
    return this.size() === 0 ? -1 : this._arr.shift();
  }
  pop_back() {
    return this.size() === 0 ? -1 : this._arr.pop();
  }
  empty() {
    return this.size() === 0 ? 1 : 0;
  }
  print_front() {
    return this.size() === 0 ? -1 : this._arr[0];
  }
  print_back() {
    return this.size() === 0 ? -1 : this._arr[this.size() - 1];
  }
}

sol = () => {
  let deque = new Deque();
  let res = [];

  const N = Number(input[0]);

  for (let i = 1; i <= N; i++) {
    let cmd = input[i].trim().split(" ");

    switch (cmd[0]) {
      case "push_front":
        deque.push_front(cmd[1]);
        break;
      case "push_back":
        deque.push_back(cmd[1]);
        break;
      case "pop_front":
        res.push(deque.pop_front());
        break;
      case "pop_back":
        res.push(deque.pop_back());
        break;
      case "size":
        res.push(deque.size());
        break;
      case "empty":
        res.push(deque.empty());
        break;
      case "front":
        res.push(deque.print_front());
        break;
      case "back":
        res.push(deque.print_back());
        break;
    }
  }
  return res;
};

console.log(sol().join("\n"));
