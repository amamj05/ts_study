"use strict";
// TypeScript의 객체 타입은 object 이다.
// object에는 속성값을 넣을 수가 없다
let user;
user = {
    name: "KIM",
    age: 20
};
let kimUser = {
    name: 'kim',
    age: 20
};
console.log(kimUser.name);
let leeUser = {
    name: "LEE",
    age: 20
};
console.log(leeUser.name);
