num = int(input())

for i in range(1, num+1):
	if (10 >= i >= 1):
		if (i % 3 == 0):
			print('X', end=" ")
		else:
			print(i, end=" ")
	else:
		if (i % 10 == 0):
			print(i, end=" ")
		elif ((i % 10) % 3 == 0):
			print('X', end=" ")
		else:
			print(i, end=" ")
