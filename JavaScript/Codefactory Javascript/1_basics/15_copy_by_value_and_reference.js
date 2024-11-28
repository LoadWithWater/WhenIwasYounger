/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */
let original = '안녕하세요';
let clone = original;

console.log(original);      // 안녕하세요
console.log(clone);         // 안녕하세요

clone += ' 안유진 입니다.';
console.log('--------------');
console.log(original);      // 안녕하세요
console.log(clone);         // 안녕하세요 안유진 입니다.


let originalObj = {
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);   // { name: '안유진', group: '아이브' }
console.log(cloneObj);      // { name: '안유진', group: '아이브' }

console.log('----------');

originalObj['group'] = '코드팩토리';
console.log(originalObj);   // { name: '안유진', group: '코드팩토리' }
console.log(cloneObj);      // { name: '안유진', group: '코드팩토리' }

console.log(originalObj === cloneObj);  // true
console.log(original === clone);        // false



originalObj = {
    name: '최지호',
    group: '코드팩토리',
};
cloneObj = {
    name: '최지호',
    group: '코드팩토리',
};
console.log(originalObj === cloneObj);  // false

const yuJin1 = {
    name: '안유진',
    group: '아이브',
}
const yuJin2 = yuJin1;
const yuJin3 = {
    name: '안유진',
    group: '아이브',
}

// true
console.log(yuJin1 === yuJin2);
// false
console.log(yuJin1 === yuJin3);
// false
console.log(yuJin2 === yuJin3);



/**
 * Spread Operator
 */
const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4);

console.log(yuJin4 === yuJin3); // false

const yuJin5 = {
    year: 2003,
    ...yuJin3,
};
console.log(yuJin5);    // { year: 2003, name: '안유진', group: '아이브' }

const yuJin6 = {
    name: '코드팩토리',
    ...yuJin3,
};
console.log(yuJin6);    // { name: '안유진', group: '아이브' }, yuJin3에서 name이 '안유진'이어서 덮어씌워진 걸 볼 수 있다.

const yuJin7 = {
    ...yuJin3,
    name: '코드팩토리',
}
console.log(yuJin7);    // { name: '코드팩토리', group: '아이브' }, 반대로 '코드팩토리'를 나중에 선언하여 name은 '코드팩도리'로 나와있다.

const numbers = [1, 3, 5];
const numbers2 = [
    ...numbers,
    10,
];
console.log(numbers2);  // [ 1, 3, 5, 10 ]