/**
 * Hoisting
 */

console.log('Hello');
console.log('World');


/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */
console.log(name);
var name = '코드팩토리';
console.log(name);


// let, const는 값이 초기화되기 전 값을 미리 가져오는 버그를 방지 가능 (Hoisting 방지)
console.log(yuJin);
let yuJin = '안유진';