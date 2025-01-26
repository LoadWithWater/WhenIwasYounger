def prime(N):
    temp = N

    if (N == 1):
        return ""
    elif (N == 2):
        print(2)
    elif (N == 3):
        print(3)
    else:
        for i in range(2, N):
            while (temp % i == 0):
                print(i)
                temp = temp / i
                if (temp == 1):
                    break

N = int(input())
prime(N)
