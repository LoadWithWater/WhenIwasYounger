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
|변수|재선언|재할당|
|:----|:-----:|:-----:|
|var|O|O|
|let|X|O|
|const|X|X|

<br />

```
const 사람 = {name : "kim"}
사람.name = "park"
```
const는 재할당이 불가능하지만\
오브젝트 내 값은 변경이 가능하다.
