// 백준 11047 동전 0 (실버)

const fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

// 동전 종류 N 가지, 만들고자 하는 합 K
// 필요한 동전 개수의 최솟값

var [N, K] = input[0].split(" ").map(Number);
let coins = [];
for (let i = 0; i < N; i++) {
  coins.push(Number(input[i + 1]));
}

// 가장 큰 단위부터 차례대로 많이 사용하도록 한다.

var ans = 0;

for (let i = coins.length - 1; i >= 0; i--) {
  if (coins[i] <= K) {
    ans += Math.floor(K / coins[i]);
    K %= coins[i];
  }
  if (K == 0) {
    console.log(ans);
    break;
  }
}
