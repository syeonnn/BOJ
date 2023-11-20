// 백준 9095 1, 2, 3 더하기
// [입력]
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다.
// 각 테스트 케이스는 한 줄로 이루어져 있고, 정수 n이 주어진다.
// n은 양수이며 11보다 작다.

// [출력]
// 각 테스트 케이스마다, n을 1, 2, 3의 합으로 나타내는 방법의 수를 출력한다.

const fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

const T = +input[0];

// m[j] = 1,2,3의 합으로 j를 나타내는 방법의 수
let m = new Array(12).fill(0);
m[1] = 1; //1
m[2] = 2; //1+1,2
m[3] = 4; //1+2,2+1,3,1+1+1

let ans = [];

for (let i = 0; i < T; i++) {
  let N = +input[i + 1];

  if (N >= 4) {
    for (let k = 4; k <= N; k++) {
      m[k] = m[k - 1] + m[k - 2] + m[k - 3];
    }
  }
  ans.push(m[N]);
}

console.log(ans.join("\n"));
