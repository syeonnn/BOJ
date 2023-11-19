X = int(input())

# d[i] 는 정수i에 대해 1로 만들때 까지 필요한 연산 횟수
d = [0]*(X+1)
d[1] = 0

for i in range(2, X+1):
    # 2 or 3의 배수가 아닌 경우에는 -1 연산이 디폴트이므로!
    d[i] = d[i - 1] + 1
    if i%3==0 : d[i] = min(d[i//3]+1, d[i])
    if i%2==0 : d[i] = min(d[i//2]+1, d[i])

print(d[X])
