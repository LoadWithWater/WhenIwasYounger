# 유클리드 호제법
import math

def gcd(n, m):
    while (m != 0):
        r = n % m
        n = m
        m = r
    return n

T = int(input())
for i in range(T):
    A, B = map(int, input().split())

    gcd_result = gcd(A, B)
    print(int((A*B) / gcd_result))



## math를 활용한 풀이

# import math

# T = int(input())
# for i in range(T):
#     A, B = map(int, input().split())

#     print(int(A*B / math.gcd(A, B)))