import sys

while 1:
	A, B = map(int, sys.stdin.readline().split())
	if (A == 0 and B == 0):
		break
	else:
		if (A%B == 0):
			print("multiple")
		elif (B%A == 0):
			print("factor")
		else:
			print("neither")