HH, MM = input().split()
HH = int(HH)
MM = int(MM)

if (MM < 45 and HH == 0):
	MM = 60 + MM - 45
	HH = 23
elif (MM < 45):
	MM = 60 + MM - 45
	HH -= 1
else:
	MM -= 45

print(HH,MM)
        
# 파이썬 print 시 변수와 변수 사이에 콤마를 찍으면,
# "변수 변수"로 서로 띄워져서 출력된다.