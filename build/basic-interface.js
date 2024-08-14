"use strict";
// TypeScript의 객체 타입은 object 이다.
// object에는 속성값을 넣을 수가 없다
let user;
user = {
    name: "KIM",
    age: 20
};
let leeUser = {
    name: "LEE",
    age: 20
};
console.log(leeUser.name);
let kimUser = {
    name: 'kim',
    age: 20,
    //gender 속성은 옵션값으로 설정되어있음
    email: "test@test.com",
    1: 'A',
    3: 'C',
    // 7: 'z'  타입 에러
};
console.log(kimUser.name);
kimUser.age = 30; // 수정 가능
console.log(kimUser.age);
kimUser.gender = "male"; // 옵셔널 입력 가능
// let typeTest1:manyType = 1;  타입에러
let typeTest2 = null;
let typeTest3 = "1";
let typeTest4 = 'Bike';
const ClientUser1 = {
    name: 'kim',
    age: 27,
    gender: 'female'
};
const ClientUser2 = {
    name: 'kim',
    age: 20,
    gender: 'male'
};
