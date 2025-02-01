N = int(input())
all_requests = list(map(int, input().split()))
budget = int(input())

def calculate_needed_budget(upper_bound):
    needed_budget = 0
    for request in all_requests:
        needed_budget += min(request, upper_bound)
    return needed_budget

low = 0
high = max(all_requests)
upper_bound = -1

while low <= high:
    mid = (low + high) // 2
    if calculate_needed_budget(mid) <= budget:
        upper_bound = mid
        low = mid + 1
    else:
        high = mid - 1

result = -1
for request in all_requests:
    given = min(request, upper_bound)
    result = max(result, given)
print(result)