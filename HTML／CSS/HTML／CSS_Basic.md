### 간단 스타일 넣는 법

```
<p style="font-size : 20px; color : red">TEXT</p>
```
스타일 이름 : 스타일 값; 형식으로 스타일 삽입


### HTML에 CSS 파일 삽입

```
<link herf= "파일경로" rel = "stylesheet" >
```

### 셀렉터의 우선순위
1. Style=""
2. #id
3. .class
4. p

### display
div, p, h1, li 등은 기본적으로 block 속성이 내장되어 있다.\
그래서 이와 같은 태그를 사용하면 한 행을 전부 차지하게 된다.\
이게 싫으면 display 속성을 inline 등으로 바꾸면 된다.\
ex) display: inline, inline-block, flex 등
### display : inline-block 사용법
HTML의 내용을 가로로 배치 할 수 있다.\
간편하지만 태그 사이에 공백이 있다면 공백도 그대로 나타나므로 제거해야 한다.\
<br/>
공백 제거방법
방법 1. 태그 사이에 주석을 넣는다.\
방법 2. 부모의 폰트사이즈를 0으로 만든다.
