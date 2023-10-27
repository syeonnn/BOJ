// 백준 1475 빈 방
// [입력]
// 첫째 줄에 다솜이의 방 번호 N이 주어진다. N은 1,000,000보다 작거나 같은 자연수이다.

// [출력]
// 첫째 줄에 필요한 세트의 개수를 출력한다.

fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

// 백준 1475 방 번호
const n = Number(input.shift());
// 숫자를 배열로 split()또는 Array.from()
const nTostr = String(n);
const strToarr = Array.from(nTostr);
let arr = Array(10).fill(0);
let cnt = 0;

const sol = () => {
  for (let i of strToarr) {
    if (i == 6 || i == 9) {
      cnt++;
    } else {
      arr[i]++;
    }
  }
  cnt = cnt % 2 == 0 ? cnt / 2 : Math.ceil(cnt / 2);
  arr[6] = cnt;

  const max = Math.max(...arr);
  return max;
};

console.log(sol());
