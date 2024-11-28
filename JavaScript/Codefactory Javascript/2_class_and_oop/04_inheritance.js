/**
 * Inheritance
 * 
 * 상속은 객체들 간의 관계를 구축하는 방법이다.
 * 수퍼클래스, 또는 부모 클래스 등의 기존의 클래스로부터
 * 속성과 동작을 상속받을 수 있다.
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel {   // 상속 받기 위해 extends를 사용한다
    dance() {
        return `여자 아이돌이 춤을 춥니다.`;
    }
}
class MaleIdolModel extends IdolModel {   // 상속 받기 위해 extends를 사용한다
    sing() {
        return `남자 아이돌이 노래를 부릅니다.`;
    }
}



const yuJin = new FemaleIdolModel('안유진', 2003);  // FemaleIdolModel { name: '안유진', year: 2003 }
console.log(yuJin);

const jiMin = new MaleIdolModel('지민', 1995);      // MaleIdolModel { name: '지민', year: 1995 }
console.log(jiMin);

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(jiMin.sing());
console.log(jiMin.year);


const cf = new IdolModel('코드팩토리', 1992);   // IdolModel { name: '코드팩토리', year: 1992 }
console.log(cf);


// instance 검사하기
console.log(yuJin instanceof IdolModel);        // true
console.log(yuJin instanceof FemaleIdolModel);  // true
console.log(yuJin instanceof MaleIdolModel);    // false

console.log('----------');
console.log(jiMin instanceof IdolModel);        // true
console.log(jiMin instanceof FemaleIdolModel);  // false
console.log(jiMin instanceof MaleIdolModel);    // true

console.log('-------------');
console.log(cf instanceof IdolModel);           // true
console.log(cf instanceof FemaleIdolModel);     // false
console.log(cf instanceof MaleIdolModel);       // false