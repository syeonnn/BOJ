// 백준 2577 숫자의 개수

// [입력]
// 첫째 줄에 A, 둘째 줄에 B, 셋째 줄에 C가 주어진다.
// A, B, C는 모두 100보다 크거나 같고, 1,000보다 작은 자연수이다.

// [출력]
// 첫째 줄에는 A × B × C의 결과에 0 이 몇 번 쓰였는지 출력한다.
// 마찬가지로 둘째 줄부터 열 번째 줄까지 A × B × C의 결과에 1부터 9까지의 숫자가
// 각각 몇 번 쓰였는지 차례로 한 줄에 하나씩 출력한다.

fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

const A = Number(input.shift());
const B = Number(input.shift());
const C = Number(input.shift());

const result = Array(10).fill(0); // 0~9 , 크기=10

// 숫자->배열로 만들어서 하나씩 탐색하는 내 방법1
const multiply = A * B * C;
const tempmul = String(multiply);
const number = tempmul.split("").map(Number);
// 숫자%10해서 한자리씩 탐색하는 바킹독 방법2
// while (N > 0) {
//   arr[N % 10]++;
//   N /= 10;
// }

for (let i of number) {
  result[i]++;
}
console.log(result.join("\n"));
