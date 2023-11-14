// 백준 10026 적록색약

// 입력
// 첫째 줄에 N이 주어진다. (1 ≤ N ≤ 100)
// 둘째 줄부터 N개 줄에는 그림이 주어진다.

// 출력
// 적록색약이 아닌 사람이 봤을 때의 구역의 개수와 적록색약인 사람이 봤을 때의 구역의 수를 공백으로 구분해 출력한다.

const fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

// 함수,visited, for문 다 따로 만들어서 2번 돌리는 것보다 maps 자체를 적락색약용, 안적록색약용으로 두 가지 만들면 중복되는 코드 줄일 수 있음.

let visited, maps;
let nocnt = 0,
  yescnt = 0;

const N = Number(input.shift());
maps = [];

for (let i = 0; i < N; i++) {
  map_items = input.shift().trim().split("");
  maps[i] = map_items;
}

visited = Array.from(Array(N), () => new Array(N).fill(0));
for (let j = 0; j < N; j++) {
  for (let k = 0; k < N; k++) {
    if (!visited[j][k]) {
      bfs(j, k);
    }
  }
}
visited = Array.from(Array(N), () => new Array(N).fill(0));
for (let j = 0; j < N; j++) {
  for (let k = 0; k < N; k++) {
    if (!visited[j][k]) {
      rg_bfs(j, k);
    }
  }
}

function bfs(sx, sy) {
  let queue = [[sx, sy]];
  let dx = [-1, 0, 1, 0];
  let dy = [0, -1, 0, 1];
  while (!!queue.length) {
    let [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < N &&
        !visited[nx][ny] &&
        maps[x][y] == maps[nx][ny]
      ) {
        visited[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }
  nocnt++;
}

function rg_bfs(sx, sy) {
  let queue = [[sx, sy]];
  let dx = [-1, 0, 1, 0];
  let dy = [0, -1, 0, 1];
  while (!!queue.length) {
    let [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
        if (
          (maps[x][y] !== "B" && maps[nx][ny] !== "B") ||
          (maps[x][y] == "B" && maps[nx][ny] == "B")
        ) {
          visited[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
  yescnt++;
}

console.log(nocnt, yescnt);
