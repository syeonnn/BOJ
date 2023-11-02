// [입력]
// 첫째 줄에는 초기에 편집기에 입력되어 있는 문자열이 주어진다.
// 이 문자열은 길이가 N이고, 영어 소문자로만 이루어져 있으며, 길이는 100,000을 넘지 않는다.
// 둘째 줄에는 입력할 명령어의 개수를 나타내는 정수 M(1 ≤ M ≤ 500,000)이 주어진다.
// 셋째 줄부터 M개의 줄에 걸쳐 입력할 명령어가 순서대로 주어진다.
// 명령어는 위의 네 가지 중 하나의 형태로만 주어진다.

// [출력]
// 첫째 줄에 모든 명령어를 수행하고 난 후 편집기에 입력되어 있는 문자열을 출력한다.

// fs = require("fs");
// const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

// // 스택 2개 (커서를 기준으로 왼쪽 스택&오른쪽 스택) 또는 // 연결리스트

// const sol = () => {
//   //const str = input.shift().trim();
//   let lstack = input.shift().split("");
//   const n = Number(input.shift());
//   const rstack = [];

//   for (let j = 0; j < n; j++) {
//     const cd = input.shift().trim().split(" ");

//     switch (cd[0]) {
//       case "L":
//         if (lstack.length == 0) break;
//         rstack.push(lstack.pop());
//         break;
//       case "D":
//         if (rstack.length == 0) break;
//         lstack.push(rstack.pop());
//         break;
//       case "B":
//         if (lstack.length == 0) break;
//         lstack.pop();
//         break;
//       case "P":
//         lstack.push(cd[1]);
//         break;
//     }
//   }

//   let answer = lstack.join("");
//   answer += rstack.reverse().join("");
//   return answer;
//   //   lstack.forEach((k) => {
//   //     ans += k;
//   //   });
//   //   rstack.forEach((k) => {
//   //     ans += k;
//   //   });
//   //   console.log(lstack.concat(rstack).join(""));
//   //   return ans;
// };

// //console.log(answer);
// console.log(sol());

fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

let lstack = input[0].split("");
const n = Number(input[1]);
const rstack = [];

for (let j = 2; j < n + 2; j++) {
  const cd = input[j].trim().split(" ");

  switch (cd[0]) {
    case "L":
      if (lstack.length == 0) break;
      rstack.push(lstack.pop());
      break;
    case "D":
      if (rstack.length == 0) break;
      lstack.push(rstack.pop());
      break;
    case "B":
      if (lstack.length == 0) break;
      lstack.pop();
      break;
    case "P":
      lstack.push(cd[1]);
      break;
  }
}

let answer = lstack.join("");
answer += rstack.reverse().join("");
console.log(answer);
