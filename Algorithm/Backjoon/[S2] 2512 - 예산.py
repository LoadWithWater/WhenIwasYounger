N = int(input())
all = list(map(int, input().split()))
budget = int(input())

def cal(upper_bound: int) -> int:
    needed_budget = 0
    for i in all:
        needed_budget += min(i, upper_bound)
    
    return needed_budget


low = 0
high = max(all)
upper_bound = -1

while (low <= high):
    mid = (low+high) // 2

    if (cal(mid) <= budget):
        upper_bound = mid
        low = mid + 1
    else:
        high = mid - 1

result = -1
for i in all:
    given = min(i, upper_bound)
    result = max(result, given)
print(result)