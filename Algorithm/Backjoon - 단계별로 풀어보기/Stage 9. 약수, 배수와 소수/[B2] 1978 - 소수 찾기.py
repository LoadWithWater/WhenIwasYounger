def prime(n):
    isPrime = 0
    if (n == 2 or n == 3):
        return True
    elif (n == 1):
        return False
    else:
        for i in range(2, n):
            if (n % i == 0):
                isPrime += 1

    if (isPrime > 0):
        return False
    else:
        return True        



N = int(input())
lists = list(map(int, input().split()))
result = 0

for i in lists:
    if (prime(i) == True):
        result += 1

print(result)