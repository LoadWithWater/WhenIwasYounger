x = []
y = []
result_x = 0
result_y = 0

for _ in range(3):
    N, M = map(int, input().split())
    x.append(N)
    y.append(M)

    
if (x[0] == x[1]):
    result_x = x[2]
elif (x[1] == x[2]):
    result_x = x[0]
else:
    result_x = x[1]

if (y[0] == y[1]):
    result_y = y[2]
elif (y[1] == y[2]):
    result_y = y[0]
else:
    result_y = y[1]

    
print(result_x, result_y)