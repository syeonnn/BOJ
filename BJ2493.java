// 실패
// 백준 2493 _ 자바

import java.io.*;
import java.util.*;

public class App {
    static int N;
    static int Tops[];
    Stack<Integer> stack = new Stack<>();
    StringBuilder sb = new StringBuilder();

    public void Solve() throws IOException{
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(bf.readLine());
        StringTokenizer st = new StringTokenizer(bf.readLine()," ");
        Tops = new int[N+1];
		for (int i = 1; i <=N; i++) // 건물번호를 1번 to N
		{
            Tops[i] = Integer.parseInt(st.nextToken());
		}

        for (int i=1; i<=N; i++) {
            // 스택에 있는 탑과 i번째 탑의 높이 비교
            while (!stack.isEmpty() && Tops[stack.peek()] <= Tops[i]) {
                // 스택의 탑이 i번째 탑과 높이가 같거나 작으면 삭제
                stack.pop(); // 제거 후 스택의 다른 탑도 비교
            }
            if (stack.isEmpty()) { // 수신할 탑이 없으면 0 출력
                sb.append("0"+" ");
            } else { // 수신한 탑이 있으면 탑의 번호 출력
                sb.append(stack.peek()+" ");
            }
            stack.push(i); // i번째 탑의 번호를 스택에 일단 삽입
        }
        System.out.println(sb.toString());
    }

    public static void main(String[] args) throws Exception {
        App m = new App();
        m.Solve();
    }
}
