All = int(input())
N = int(input())
TestPrice = 0

for i in range(N):
	price, num = input().split()
	price = int(price)
	num = int(num)
	TestPrice += price*num
	
if (All == TestPrice):
	print("Yes")
else:
	print("No")