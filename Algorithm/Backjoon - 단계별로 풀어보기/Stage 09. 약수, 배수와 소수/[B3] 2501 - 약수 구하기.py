N, K = map(int, input().split())
count = 0
result = 0

if (N == 1):
	if (K == 1):
		print(1)
else:
	for i in range(1, N+1):
		if (N % i == 0):
			count = count + 1
			if (count == K):
				print(i)
				break
	if (count < K):
		print(0)