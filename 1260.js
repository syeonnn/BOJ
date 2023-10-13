// 백준 1260 
// dfs와 bfs
// [입력]
// 첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다. 
// 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 
// 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.

// [출력]
// 첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. V부터 방문된 점을 순서대로 출력하면 된다.

const fs = require("fs");
const INPUTFILE = process.platform === 'linux' ? '/dev/stdin' : 'week5/input.txt';
const input = fs.readFileSync(INPUTFILE).toString().trim().split('\n');

const [n,m,v] = input.shift().split(" ").map(Number);

const graph = [...Array(n+1)].map(()=>[]);
const visitedD = Array(n+1).fill(0);
const visitedB = Array(n+1).fill(0);

input.forEach((item)=>{
    const [a,b] = item.split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
})
graph.map((item)=> item.sort((a,b)=>a-b));

let answerD = [];
function dfs(node,cnt){ // 재귀
    visitedD[node]=cnt++;
    answerD.push(node);

    for(let next of graph[node]){
      if(visitedD[next]==0){
        dfs(next,cnt);
      }    
    }
    return answerD.join(" ");
}

let answerB = [];
function bfs(root,cnt){ // 큐
    const arr = [];
    arr.push(root); // 루트노드

    while(!!arr.length){
        const node = arr.shift();
        visitedB[node] = cnt++;
        answerB.push(node);

        graph[node].forEach((next)=>{
            if(visitedB[next]==0){
                visitedB[next]=cnt;
                arr.push(next);
            }
        })
    }
    return answerB.join(" ");
}

console.log(dfs(v,1));
console.log(bfs(v,1));
