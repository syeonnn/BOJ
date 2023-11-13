// 백준 1012 유기농 배추
// input값 shift()로 꺼내는 것 VS input[idx]로 접근하는 것 차이를 분명히 인지하고 문제풀기...!!!

const fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

// bfs는 스택, dfs는 재귀

// 테스트 케이스의 개수 T
const T = Number(input.shift());
let map, cnt, visited, result;
let [M, N, K] = [0, 0, 0];
result = [];
for (let t = 0; t < T; t++) {
  // (가로)M * (세로)N  (배추위치개수)K
  [M, N, K] = input.shift().trim().split(" ").map(Number);
  map = Array.from(Array(M), () => new Array(N).fill(0));
  visited = Array.from(Array(M), () => new Array(N).fill(0));
  // 배추의 위치 K개 (X,Y)
  for (let i = 0; i < K; i++) {
    let [x, y] = input.shift().trim().split(" ").map(Number);
    map[x][y] = 1;
  }
  cnt = 0; // 배추흰지렁이 수 초기화

  // bfs()로 최수 개수 찾기.
  for (let j = 0; j < M; j++) {
    for (let k = 0; k < N; k++) {
      if (map[j][k] == 1 && visited[j][k] == 0) {
        bfs(j, k); //현재노드
      }
    }
  }
  result.push(cnt); // 각 테케 탐색 끝날때마다 필요한 지렁이 수 저장
}

console.log(result.join("\n"));

function bfs(sx, sy) {
  let queue = [[sx, sy]];
  //console.log(queue);
  // stack.push(map[x][y]);
  //console.log(map[x][y]);

  let nx, ny;
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  while (!!queue.length) {
    const [x, y] = queue.shift();
    //console.log(x, y);

    for (let i = 0; i < 4; i++) {
      nx = x + dx[i];
      ny = y + dy[i];
      //console.log(nx, ny);
      // 고려해야 할 조건 정확히 체크 ! 범위설정!!
      if (
        nx >= 0 &&
        nx < M &&
        ny >= 0 &&
        ny < N &&
        map[nx][ny] &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }
  cnt++;
}
