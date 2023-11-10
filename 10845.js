// 백준 10845 
const fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

const N = Number(input[0]);

let que = [];
let cmd;
let ans = [];

for (let i = 0; i < N; i++) {
  cmd = input[i + 1].trim().split(" ");
  switch (cmd[0]) {
    case "push":
      que.push(cmd[1]);
      break;
    case "pop":
      ans.push(que.shift() || -1);
      break;
    case "size":
      ans.push(que.length);
      break;
    case "empty":
      ans.push(que.length === 0 ? 1 : 0);
      // que[0]? 0:1;
      break;
    case "front":
      ans.push(que[0] || -1);
      break;
    case "back":
      ans.push(que[que.length - 1] || -1);
      break;
  }
}

console.log(ans.join("\n"));
