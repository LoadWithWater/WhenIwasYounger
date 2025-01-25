import math

HH, MM = input().split()
Cook = int(input())
HH = int(HH)
MM = int(MM)

All = (HH*60 + MM + Cook)
AllH = math.trunc(All/60)
AllM = All % 60
if (AllH/24 == 0):
	AllH == 0
else:
	AllH = AllH%24
	

print(AllH, AllM)

# 파이썬 버림 : import math후 math.trunc(처리할 숫자) 사용