A, B, V = map(int, input().split())

print((V-B) % (A-B))


# import sys
# A, B, V = map(int, sys.stdin.readline().split())
# all = 0
# days = 1

# while True:
#     all += A
#     if (all >= V):
#         break
#     else:
#         all -= B
#         days += 1

# print(days)