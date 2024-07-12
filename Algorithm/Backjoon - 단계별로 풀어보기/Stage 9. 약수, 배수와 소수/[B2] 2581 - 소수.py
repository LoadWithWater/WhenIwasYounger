def prime(M):
    if (M == 1):
        return False
    elif (M == 2 or M == 3):
        return True
    else:
        for i in range(2, M):
            if (M % i != 0):
                continue
            else:
                return False
        
    return True


M = int(input())
N = int(input())
primtList = []

for M in range(M, N+1):
    if (prime(M) == True):
        primtList.append(M)

if (len(primtList) == 0):
    print(-1)
else:
    print(sum(primtList))
    print(min(primtList))