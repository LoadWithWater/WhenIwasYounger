/**
 * Class Keyword
 * 클래스 이름 첫글자는 대문자로 짓는걸 추천
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // 메서드
    sayName(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

// constructor - 생성자

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);
const ray = new IdolModel('레이', 2004);
console.log(ray);
const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung);
const liz = new IdolModel('리즈', 2004);
console.log(liz);
const eseo = new IdolModel('이서', 2007);
console.log(eseo);

console.log(yuJin.name);
console.log(yuJin.year);

console.log(yuJin.sayName());
console.log(wonYoung.sayName());

console.log(typeof IdolModel);  // 클래스는 함수로 인식한다
console.log(typeof yuJin);      // 클래스로 생성한 인스턴스는 오브젝트(객체)이다