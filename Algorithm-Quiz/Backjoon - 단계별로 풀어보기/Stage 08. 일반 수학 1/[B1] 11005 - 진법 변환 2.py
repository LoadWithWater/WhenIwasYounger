N, B = map(int, input().split())
result = ''
nums = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

while N:
    result += str(nums[ N % B ])
    N //= B

print(result[::-1])