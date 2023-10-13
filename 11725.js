// 백준 11725 트리의 부모 찾기
// [입력]
// 첫째 줄에 노드의 개수 N (2 ≤ N ≤ 100,000)이 주어진다. 
// 둘째 줄부터 N-1개의 줄에 트리 상에서 연결된 두 정점이 주어진다.
// [출력]
// 첫째 줄부터 N-1개의 줄에 각 노드의 부모 노드 번호를 2번 노드부터 순서대로 출력한다.

const fs = require('fs');
const INPUTFILE = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(INPUTFILE).toString().trim().split('\n');

const N = Number(input.shift()); // +input.shift()해도 숫자 변환가능

function solution(input,n) {
   const tree = Array.from(Array(n+1), ()=>[]); // [...Array(n+1)].map(()=>[]);
   const visited = new Array(n+1).fill(0);
   
   input.forEach((item)=>{
      const [u,v] = item.split(" ").map(Number);
      tree[u].push(v);
      tree[v].push(u);
   });
   
   const arr= []; // bfs에 쓰이는 배열
   const answer = [];   // 각 노드의 부모 노드 저장하는 배열
   let cnt = 1;   // 방문여부 확인
   
   arr.push(1);   // 루트노드 항상 1 
   
   // bfs (+dfs로도 구현 가능)
   while(!!arr.length){
      const next = arr.shift();
      visited[next]=cnt;
   
      for(let node of tree[next]){
         if(!visited[node]){
            visited[node]=cnt;
            arr.push(node);
            answer[node] = next;
         }
      }
   }   
   return answer.join("\n").trim();
}

console.log(solution(input,N));