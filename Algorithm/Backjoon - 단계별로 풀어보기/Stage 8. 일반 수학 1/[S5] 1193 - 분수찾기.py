X = int(input())
line = 1

while X > line:
    X -= line
    line += 1

# 짝수일 경우
if (line % 2 == 0):
    a = X
    b = line - X + 1
# 홀수일 경우
elif (line % 2 == 1):
    a = line - X + 1
    b = X

print(f'{a}/{b}')



# num = 1     # 수
# fibo = 1    # 더하기 수
# direct = 0  # 방향

# while True:
#     if (num <= X < num + fibo):
#         break
#     else:
#         num += fibo
#         fibo += 1
#         direct += 1

# print(num)
# print(fibo)
# print(direct)
# print(X)