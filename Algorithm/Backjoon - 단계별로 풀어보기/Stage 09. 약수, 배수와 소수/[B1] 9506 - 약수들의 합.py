def perfect(n):
    result = 0
    for i in range(1, n):
        if (n % i != 0):
            continue
        else:
            result += i

    if (n == result):
        return True
    else:
        return False

def printNum(n):
    lists = []
    for i in range(1, n):
        if (n % i != 0):
            continue
        else:
            lists.append(str(i))
            lists.append("+")
            
    lists.pop(-1)
    return lists


while True:
    n = int(input())
    if (n != -1):
        if (perfect(n) == True):
            result = " ".join(printNum(n))
            print(str(n) + " = " + result)
        else:
            print(str(n) + " is NOT perfect.")
    else:
        break