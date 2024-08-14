"use strict";
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
