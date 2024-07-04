def perfect(n):
    lists = []
    for i in n:
        if (n % i != 0):
            continue
        else:
            lists.append(i)
    return lists



while True:
    n = int(input())
    if (n != -1):
        perfect(n)
    else:
        break