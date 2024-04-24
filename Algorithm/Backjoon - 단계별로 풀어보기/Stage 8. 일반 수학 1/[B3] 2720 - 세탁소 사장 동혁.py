changes = []
T = int(input())

for i in range(T):
    change = int(input())
    changes.append(change)

for i in range(T):
    result = []
    result.append(changes[i] // 25)
    changes[i] = changes[i] % 25
    result.append(changes[i] // 10)
    changes[i] = changes[i] % 10
    result.append(changes[i] // 5)
    changes[i] = changes[i] % 5
    result.append(changes[i] // 1)
    
    print(*result)
    