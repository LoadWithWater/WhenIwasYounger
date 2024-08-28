N = int(input())
n = int(N/4)

for i in range(n):
	print ("long", end = " ")

print ("int")

# end=" "를 붙이면 줄바꿈없이 뒤에 공백을 추가한 상태로 계속 붙일 수 있다.
# n에서 int(N/4)라고 입력하였는데, 정수를 대입할 때도 int를 안붙이고 대입하면 에러가 난다.
# 반드시 int()를 붙여주자.