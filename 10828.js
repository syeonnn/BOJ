// 백준10828 스택
// [입력]
// 첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다.
// 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다.
// 주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다.
// 문제에 나와있지 않은 명령이 주어지는 경우는 없다.

// [출력]
// 출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.

const fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

const stack = [];
const result = [];

function sol(cmd) {
  switch (cmd[0]) {
    case "pop":
      return stack.length === 0 ? -1 : stack.pop();
    //break;
    case "top":
      return stack.length === 0 ? -1 : stack[stack.length - 1];
    case "empty":
      return stack.length === 0 ? 1 : 0;
    case "size":
      return stack.length;
  }
}

const N = Number(input[0]);
for (let i = 1; i <= N; i++) {
  let cmd = input[i].trim().split(" ");
  if (cmd[0] == "push") stack.push(+cmd[1]);
  else result.push(sol(cmd));
}

console.log(result.join("\n"));
