// TypeScript의 객체 타입은 object 이다.
// object에는 속성값을 넣을 수가 없다

let user: object

user = {
    name: "KIM",
    age: 20
}
// console.log(user.name);  



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
}

let kimUser: User = {
    name: 'kim',
    age: 20,
    //gender 속성은 옵션값으로 설정되어있음
    email: "test@test.com"
}

console.log(kimUser.name);
kimUser.age = 30;       // 수정 가능
console.log(kimUser.age);
kimUser.gender = "male";    // 옵셔널 입력 가능
// kimUser.email = "읽기 전용이라 수정 불가능"


type manyType = null | undefined | string;
type manyValue = 'Bus' | 'Car' | 'Bike' | 'Train';


interface Value1 {
    type: number;
}
interface Value2 {
    type: string;
}
type _manyValue = Value1 | Value2;