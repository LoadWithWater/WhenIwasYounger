/**
 * Array Functions
 */

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);    // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

// push()
iveMembers.push('코드팩토리');
console.log(iveMembers);    // [ '안유진', '가을', '레이', '장원영', '리즈', '이서', '코드팩토리' ]


console.log('--------------------')
// pop()
console.log(iveMembers.pop());
console.log(iveMembers);


console.log('---------------_');
// shift()
console.log(iveMembers.shift());
console.log(iveMembers);


// unshift()
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);


console.log('---------------_');
// splice()
console.log(iveMembers.splice(0, 3))    // 0번부터 3개의 값을 삭제하고 싶다 ( 값 정하기 )
console.log(iveMembers);                // 실제 삭제하고 남은 값




iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// concat()
console.log(iveMembers.concat('코드팩토리'));   // 여기서만 적용됨 ( 다른 메모리에 저장한 후 그걸 불러오는 것 )
console.log(iveMembers);                       // 코드팩토리는 없어지고 원래대로 돌아옴

// slice()
console.log(iveMembers.slice(0, 3));    // 어떤 인덱스부터 몇 번 인덱스까지 삭제할지 정함
console.log(iveMembers);


// spread operator
let iveMembers2 = [
    ...iveMembers,      // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ], ...을 활용하여 모든 값 가져오기
];
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers,         // [ [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ] ], 리스트 안에 리스트가 들어감
];
console.log(iveMembers3);


console.log('--------------');
let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([
    ...iveMembers,
] === iveMembers);      // false, 메모리 공간이 다르다





// join()
console.log(iveMembers.join());     // 안유진,가을,레이,장원영,리즈,이서
console.log(iveMembers.join('/'));  // 안유진/가을/레이/장원영/리즈/이서
console.log(iveMembers.join(', ')); // 안유진, 가을, 레이, 장원영, 리즈, 이서

// sort()
// 오름차순
iveMembers.sort();
console.log(iveMembers);            // [ '가을', '레이', '리즈', '안유진', '이서', '장원영' ]
console.log(iveMembers.reverse());  // [ '장원영', '이서', '안유진', '리즈', '레이', '가을' ]

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);   // [ 1, 9, 7, 5, 3 ]

// a, b를 비교했을때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);   // [ 1, 3, 5, 7, 9 ]

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);   // [ 9, 7, 5, 3, 1 ]



// map()
console.log('--------------');
console.log(iveMembers.map((x) => x));              // [ '장원영', '이서', '안유진', '리즈', '레이', '가을' ]
console.log(iveMembers.map((x) => `아이브: ${x}`)); // [ '아이브: 장원영', '아이브: 이서', '아이브: 안유진', '아이브: 리즈', '아이브: 레이', '아이브: 가을' ]

console.log(iveMembers.map((x) => {
    if (x === '안유진') {
        return `아이브: ${x}`;
    } else {
        return x;
    }
}));                            // [ '장원영', '이서', '아이브: 안유진', '리즈', '레이', '가을' ]
console.log(iveMembers);        // [ '장원영', '이서', '안유진', '리즈', '레이', '가을' ]



// filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0));    // [8, 6]

// find()
console.log(numbers.find((x) => x % 2 === 0));      // 8

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0)); // 1

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));    // 25

// reduce() 퀴즈
// reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의
// 길이를 더해서 반환하라.
// 참고로 string의 길이는 .length를 이용해서 구할 수 있다.
console.log(iveMembers.reduce((p, n) => p + n.length, 0))   // 14