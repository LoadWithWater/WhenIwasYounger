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

### 리스트 끝에 원소 추가 : append
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

numbers.append([3, 4])
print(numbers)
# 결과 : [1, 2, 3, [3, 4]]
```

### 리스트 끝에 모든 원소 추가 : extend
리스트이름.extend(데이터 값)
```
numbers = [1]
print(numbers)
# 결과 : [1]

numbers.extend([2, 3])
print(numbers)
# 결과 : [1, 2, 3]
```

### 리스트 문자열로 변환하기 : join
"".join(리스트이름)
```
list = ["a", "b", "c"]
print("".join(list))
# 결과 : "abc"
```

### 오름차순, 내림차순 정렬하기 : sort(), sort(reverse=True)
리스트이름.sort(), 리스르이름.sort(reverse=True)
```
p = [1,4,5,3,45]
g = [109,183,43,1,4]
p.sort()
g.sort(reverse=True)

print(p)
print(g)

# 결과
[1, 3, 4, 5, 45]
[183, 109, 43, 4, 1]
```

### 
