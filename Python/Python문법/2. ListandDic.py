"""
중고차 판매사이트를 만들고 싶다.
판매할 차의 정보를 저장해놓자.
"""
# List 사용법
중고차 = ['K5', 'white', 5000]
print(중고차)
print(중고차[0])

# List 자료 수정하는 법
중고차[1] = 'black' # white가 black으로 바뀐다
print(중고차)



# Dictionary 사용법
중고차2 = { 
    'brand' : 'BMW',
    'model' : '520d'
    } # 사용할 데이터앞에 key를 붙여 사용한다 { key : value }
print(중고차2)
print(중고차2['brand'])

# Dictionary 자료 수정하는 법
중고차2['brand'] = 123
print(중고차2['brand'])
