# 31280번 - ФАКИР : 고행 수도자(Fakir)
#문제
#Fakir는 마법 모자에 회색 쥐 a마리, 흰색 쥐 b마리, 검정색 쥐 c마리, 점박이 쥐 d마리를 가지고 있습니다.
#눈을 감은 상태에서, Fakir가 마법 모자에서 최소 몇 마리의 쥐를 꺼내야 모든 색깔의 쥐가 있는지 확인할 수 있습니까?
#필요한 쥐의 수를 결정하는 fakir 프로그램을 작성하세요.

#입력
#표준 입력으로 한 줄에 정수 a, b, c, d가 입력됩니다.

#출력
#Fakir가 마법 모자에서 뽑아내야 하는 쥐의 수를 표준 출력으로 출력합니다.

mouses = list(map(int, input().split()))
mouses = sorted(mouses)

print(mouses[1] + mouses[2] + mouses[3] + 1)