N = int(input())
house = 1
result = 1

while N > house:
    house += 6 * result
    result += 1

print(result)