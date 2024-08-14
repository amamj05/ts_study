// TypeScript의 객체 타입은 object 이다.
// object에는 속성값을 넣을 수가 없다

let user: object

user = {
    name: "KIM",
    age: 20
}
// console.log(user.name);  



//
// type과 interface
type Person = {
    name: string;
    age: number;
};

let leeUser: Person = {
    name: "LEE",
    age: 20
};
console.log(leeUser.name);



interface User {
    name: string;
    age: number;
    gender?: string;   // 옵션 설정이 없으면 사용할때 모든 값을 넣어줘야한다
    readonly email: string;  //생성할때만 가능
    // [test1:number] : string;
    [test2:number] : Score;    
}

type Score = 'A' | 'B' | 'C' | 'D';

let kimUser: User = {
    name: 'kim',
    age: 20,
    //gender 속성은 옵션값으로 설정되어있음
    email: "test@test.com",
    1: 'A',
    3: 'C',
    // 7: 'z'  타입 에러
}

console.log(kimUser.name);
kimUser.age = 30;       // 수정 가능
console.log(kimUser.age);
kimUser.gender = "male";    // 옵셔널 입력 가능
// kimUser.email = "읽기 전용이라 수정 불가능"


//
// type Union
type manyType = null | undefined | string;
type manyValue = 'Bus' | 'Car' | 'Bike' | 'Train';

// let typeTest1:manyType = 1;  타입에러
let typeTest2: manyType = null;
let typeTest3: manyType = "1";
let typeTest4: manyValue = 'Bike';

//
//interface 선언적 확장(상속)
interface Client1 {
    name: string;
    age: number;
}

interface Client1 { 
    // 같은 이름으로 선언하면 자동으로 확장된다
    gender: string;
}

const ClientUser1: Client1 = {
    name: 'kim',
    age: 27,
    gender: 'female'
}

//
// extends 상속
interface Client2 {
    name: string;
    age: number;
}

interface Client3 extends Client2{ 
    gender: string;
}

const ClientUser2: Client3 = {
    name: 'kim',
    age: 20,
    gender: 'male'
}