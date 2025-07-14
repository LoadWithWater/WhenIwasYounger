num = int(input())
all = 0
count = 1

while (True):
	all += count
	count += 1
	if (all >= num):
		break
	
print(count - 1)
