/**
 * Immutable Object
 */

const yuJin = {
    name: '안유진',
    year: 2003,
    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear - age;
    }
}
console.log(yuJin);



console.log('--------------------')
/**
 * Extensible
 * 확장에 관한 속성 : 확장 방지 설정 시 다른 키는 추가가 안되나 삭제는 가능하다.
 */
console.log(Object.isExtensible(yuJin));

yuJin['position'] = 'vocal';
console.log(yuJin);

Object.preventExtensions(yuJin);    // 확장 방지
console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = '아이브';  // groupName 추가 안됨
console.log(yuJin);

delete yuJin['position'];
console.log(yuJin); // 삭제는 가능하다.



console.log('--------------------')
/**
 * Seal
 * 봉인 설정, 기본적으로 false가 지정되어 있다
 */
const yuJin2 = {
    name: '안유진',
    year: 2003,
    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear - age;
    }
}
console.log(yuJin2);
console.log(Object.isSealed(yuJin2));   // 기본적으로 false지정됨

Object.seal(yuJin2);    // 봉인 처리
console.log(Object.isSealed(yuJin2));

yuJin2['groupName'] = '아이브'; // 봉인 처리를 해놨기 때문에 값 추가 불가
console.log(yuJin2);

delete yuJin2['name'];      // 봉인 처리로 인해 name 삭제 불가
console.log(yuJin2);


Object.defineProperty(yuJin2, 'name', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));
// 봉인 처리시 예상과는 다르게 프로퍼티의 속성은 변경이 가능하다.
// configurable은 false로 변경되기 때문에
// 사실상 configurable false처리에 값 추가&삭제 방지 옵션을 달아놓은것과 같다.



console.log('--------------------')
/**
 * Freezed
 * 
 * 읽기 외 모든 기능을 불가능하게 만든다.
 */
const yuJin3 = {
    name: '안유진',
    year: 2003,
    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear - age;
    }
}
console.log(yuJin3);
console.log(Object.isFrozen(yuJin3));   // 기본적으로 false지정됨

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));   // freeze true 지정

yuJin3['groupName'] = '아이브'; // freeze 처리를 해놨기 때문에 값 추가 불가
console.log(yuJin3);

delete yuJin3['name'];      // freeze 처리로 인해 name 삭제 불가
console.log(yuJin3);

// Object.defineProperty(yuJin3, 'name', {
//     value: '코드팩토리',
// });
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));
// freeze 처리시 writable, configuralbe이 false로 지정되면서 값 변경이 불가능하다.
// Extensible + Seal 기능을 추가하고 나서 writable까지 false로 만들어 놓은것과 같다.



console.log('----- 하위 객체에도 영향을 끼치는가? -----')
const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};  // yuJin4 객체안에 wonYoung이라는 하위 객체를 만든다.
Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4));   // freeze 설정
console.log(Object.isFrozen(yuJin4['wonYoung']));   // freeze는 하위 객체에 영향 X