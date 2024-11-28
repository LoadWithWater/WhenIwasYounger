/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서
 * 반환받고싶다면 어떻게 해야할까?
 */
console.log((2 * 10 / 2 % 3).toString());   // 1
console.log((3 * 10 / 2 % 3).toString());   // 0

/**
 * 개발자는 DRY 한다. ( 코드를 반복해서 쓰지말자 ( 반복문 사용) )
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */
function calculate() {
    console.log((3 * 10 / 2 % 3).toString());
}

// calculate();

function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());
}

/**
 * 함수에서 입력받는 값에대한 정의를 Parameter라고한다.
 * 
 * 실제 입력하는 값은 argument라고 한다.
 */
calculate(4);   // 2
calculate(5);   // 1


function multiply(x, y) {
    console.log(x * y);
}

multiply(2, 4);

function multiply(x, y = 10) {  // y는 값을 정해주지 않으면 자동으로 10이되며 이를 default parameter라고 한다.
    console.log(x * y);
}

multiply(2, 4); // 8
multiply(2);    // 20


/**
 * 반환받기
 * return 받기
 */
console.log('---------------');
function multiply(x, y) {
    return x * y;
}

const result1 = multiply(2, 4);     // multiply 함수를 사용하여 얻은 값을 대입
console.log(result1);               // 8

const result2 = multiply(4, 5);
console.log(result2);               // 20

 
/**
 * Arrow 함수
 */
const multiply2 = (x, y) => {
    return x * y;
}
console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y;      // 중괄호와 return 생략
console.log(multiply3(4, 5));

const multiply4 = x => x * 2;           // parameter가 1개라면 소괄호 생략 가능
console.log(multiply4(2));

const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;  // x값, y값, z값 출력
console.log(multiply5(2)(5)(7));

function multiply6(x) {
    return function (y) {
        return function (z) {
            return `x: ${x} y: ${y} z: ${z}`
        }
    }
}
console.log(multiply6(3)(4)(5));

const multiplyTwo = function (x, y) {
    return x * y;
}
console.log(multiplyTwo(4, 5));

const multiplyThree = function (x, y, z) {
    console.log(arguments);
    return x * y * z;
}

console.log('-----------------');
console.log(multiplyThree(4, 5, 6));        // 120

const multiplyAll = function (...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));  // 1814400

// immediately invoked function
(function(x, y){
    console.log(x * y);
})(4, 5)                    // 20

console.log(typeof multiply);               // function
console.log(multiply instanceof Object);    // true