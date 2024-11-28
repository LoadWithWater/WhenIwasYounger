/**
 * Getter and Setter
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    /**
     * Getter
     * 1) 데이터를 가공해서 새로운 데이터를 반환할때
     * 2) private한 값을 반환할때
     */
    get nameAndYear(){      // getter
        return `${this.name}-${this.year}`; // 이름과 연도가 붙어진 값을 반환
    }

    /**
     * Setter
     * 1) 값을 새로 저장할 때
     * 2) 무조건 파라미터를 하나 받아야 한다.
     */
    set setName(name){      // setter
        this.name = name;
    }
}

const yuJin = new IdolModel('안유진', 2003);    
console.log(yuJin);                 // IdolModel { name: '안유진', year: 2003 }
console.log(yuJin.nameAndYear);     // Getter 사용 : 안유진-2003

yuJin.setName = '장원영';           // Setter 사용
console.log(yuJin);                 // IdolModel { name: '장원영', year: 2003 }   ->   '안유진'이 '장원영'으로 변경



class IdolModel2{
    #name;      // #을 붙이면 private로 지정한다는 의미로 출력 시 숨길 수 있다
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2);        // IdolModel2 { year: 2003 }    ->  #사용으로 인해 name은 조회되지 않음
console.log(yuJin2.name);   // 안유진   -> Getter는 private지정한 이름을 조회할 수 있다

yuJin2.name = '코드팩토리';  // Setter로 인해 private지정한 이름을 바꿀 수 있다.
console.log(yuJin2.name);   // 코드팩토리