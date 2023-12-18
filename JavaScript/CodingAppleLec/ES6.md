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
