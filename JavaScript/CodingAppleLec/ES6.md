# ES6 새 문법

### arrow function
```
function() {

}
() =>
```

### var 변수에 이어 let, const등장
var, let, const의 3종류의 변수는 선언, 할당, 범위
이 3가지에서 차이가 난다.
```
var 변수이름;  // 선언
변수이름 = 10; // 할당
```
변수의 종류를 작성하고 옆에 이름을 지정하는 것을
<span style="color: red">선언</span>이라고 한다.\
이름을 지정한 뒤 옆에 값을 집어넣는 것을
<span style="color: red">할당</span>이라고 한다.
|변수|재선언|재할당|범위|
|:----|:-----:|:-----:|:-----:|
|var|O|O|function|
|let|X|O|{}|
|const|X|X|{}|

<br />

```
const 사람 = {name : "kim"}
사람.name = "park"
```
const는 재할당이 불가능하지만\
오브젝트 내 값은 변경이 가능하다.

<br />

절대로 변경이 되지 않는 오브젝트를 만들려면\
Object.freeze()를 이용한다.\
ex) Object.freeze(오브젝트 이름);\
이렇게 선언하면 오브젝트 내 값도 바뀌지 않는다.\
바꾸려고 해도 원래 오브젝트대로 출력되며 에러는 안난다.\
만약 에러를 보고 싶다면 script태그 바로 밑에 'use strict'라고 적는다.

## 변수의 Hoisting 현상
JS는 변수를 동시에 선언하고 할당하면\
선언 부분을 맨 위로 강제로 끌어올려 처리한다.\
다음과 같은 코드가 있다고 가정하자.
```
console.log(숫자);  // 숫자라는 변수가 없다고 에러가 뜬다고 생각할 수 있으나 undefined가 나온다.
var 숫자 = 10; // 숫자라는 변수를 선언하고 10을 할당
console.log(숫자); // 숫자가 할당되어 값이 10이 나온다.
```
그래서 위 코드를 정리하면
```
var 숫자;
console.log(숫자);
숫자 = 10;
console.log(숫자);
```
브라우저는 이렇게 해석한다는 것이다.\
하지만 let이나 const는 Hoisting이 일어나지만\
할당이 되지 않는다.
```
console.log(숫자);
let 숫자 = 10;
console.log(숫자);
```
이 경우에는
```
let 숫자;
console.log(숫자);
숫자 = 10;
console.log(숫자);
```
똑같이 Hoisting이 일어나는데,\
var는 Hoisting 시 undefined가 할당되지만,\
let이나 const는 Hoisting 시 아무것도 없는 상태가 된다.\
첫번째줄 'let 숫자'에는 아무것도 없는 상태라서\
두번째줄 'console.log(숫자);'에서 에러가 나버린다.\
따라서 var과 let, const의 Hoisting을 주의해야 한다.

<br />

참고로 함수선언도 Hoisting이 일어난다.\
함수선언은 차이점이 존재한다.
```
function 함수(){   }
var 함수 = function(){   }
```
function 함수(){} 의 경우 전부 Hoisting되며,\
var 함수 = function(){} 은 선언 부분만 Hoisting된다는 차이가 있다.
이를 자세히 살펴보면
```
함수();
var 함수 = function(){
  console.log(안녕);
  var 안녕 = 'Hello';
}


var 함수(); // 함수() 뒤에 아무것도 없으므로 에러가 난다.
함수();
함수 = function(){
  console.log(안녕);
  var 안녕 = 'Hello';
}
```
코드에서 var 함수 = function(){}으로 선언 한걸 볼 수 있다.\
이때 'var 함수' 부분만 Hoisting되어 뒤에는 아무것도 없다는 뜻이므로,\
에러가 발생한다.

## window로 전역변수 만들기
```
window.이름 = '김';

console.log(이름); // 김 출력
console.log(window.이름); // 김 출력(위와 같은 의미)
```
window는 JS 기본함수를 담은 '오브젝트'이다.\
그래서 전역변수를 만들때 window라는 오브젝트안에\
변수를 집어넣는거라 보면 된다.

## Spread Operator ( ... | 괄호제거 해주는 연산자 )
ES6에 추가된 문법\
괄호를 제거해 준다.
```
var 문자 = 'hello';
console.log(...문자); // 결과 => h e l l o

var 문자열 = ['hello', 'world'];
console.log(...문자열); // 결과 => hello world
```
<br>
사용법\
1. Array 합치기/복사에 자주 사용한다.
```
var a = [1, 2, 3]
var b = [4, 5]
var c = [...a, ...b] // c를 출력해보면 [1, 2, 3, 4, 5]가 나온다.
```
<br>
어레이를 복사할 때는 주의해야 한다.
```
var a = [1, 2, 3]
var b = a;
```
위와 같이 복사하면 a와 b는 값은 같게 나오지만\
a 배열의 원소를 바꾸려고하면 b도 같이 바뀌어버린다.
```
var a = [1, 2, 3]
var b = [...a]
```
따라서 위와같이 ...을 사용하여 괄호를 씌워주면\
a와 b의 값 공유가 일어나지 않는다.
<br>
2. Object 합치기/복사에 자주 사용한다.
```
var o1 = { a:1, b:2 };
var o2 = { c:3, ...o1 }; // o2를 출력해보면 a, b, c가 다 들어있다.
// {c: 3, a: 1, b: 2}
```
참고로 키 값 중복이 발생한다면\
무조건 뒤에 오는 키의 값이 들어간다.
```
var o1 = { a:1, b:2 };
var o2 = { a:3, ...o1 }; // o1의 a 값이 들어가서 o2에는 a가 1의 값을 가진다.
```
※ spread 연산자는 함수소괄호, Object 중괄호 내, Array 대괄호 내에서\
보통 사용해야한다.\
다른 곳에서 썼다가 에러가 날 수도 있기 때문
