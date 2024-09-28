### 문자열 리스트 변환하기 : List
문자열을 리스트로 변환하는 함수 List
```
  str = "string"
  str = list(str)

  # 결과 : ['s', 't', 'r', 'i', 'n', 'g']
```

### 리스트 문자열 변환하기 : join
join을 사용하면 리스트를 문자열로 변환할 수 있다.\
join앞에 ""안에 있는 내용을 기준으로 변환한다.\
예시)
```
str_list = ['s', 't', 'r', 'i', 'n', 'g']
str = "".join(str_list)
# 결과 : string

str_list = ['s', 't', 'r', 'i', 'n', 'g']
str = " ".join(str_list)
# 결과 : s t r i n g

str_list = ['s', 't', 'r', 'i', 'n', 'g']
str = "●".join(str_list)
# 결과 : s●t●r●i●n●g
```

### 리스트 추가하기 : append
리스트이름.append(데이터 값)
```
numbers = [1]
print(numbers)
# 결과 : [1]

numbers.append(2)
print(numbers)
# 결과 : [1, 2]

numbers.append(3)
print(numbers)
# 결과 : [1, 2, 3]
```

### 리스트