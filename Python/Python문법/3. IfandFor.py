"""
- if 사용법 - 
if 조건식 :
    조건식이 참일때 실행할코드
else :
"""

재고량 = 10
if 재고량 > 0 :
    print('지금주문가능합니다~')

중고차 = ['K5', 'white', 5000]
if 'K6' in 중고차 :
    print("지금 주문 가능합니다~")
else :
    print("주문 불가능함 ㅅㄱ")


"""
- for 반복문 -
노가다 줄일때 사용
1. 코드 단순 반복할 때
2. List에서 자료 하나씩 뽑을 때
"""
for i in range(0, 10) :
    print("BMW 있어요 ~")

중고차들 = ['K5', 'BMW', 'Tico']
for i in 중고차들 :
    print(i)
