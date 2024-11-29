/**
 * Property Attribute
 * 프로퍼티의 속성
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼리
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만
 *                     다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티
 *                     예를 들면 getter와 setter
 *
 */
const yuJin = {
    name: '안유진',
    year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));