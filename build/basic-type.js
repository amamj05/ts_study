"use strict";
// 숫자, 글자, 참거짓
let age = 30;
let nondisclosure = true;
let myName = "KIM";
// 배열
let arr = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = ["일", "이", "삼"];
// 튜플
let bTuple;
bTuple = ['z', 1];
bTuple[0].toLowerCase();
// bTuple[1].toLowerCase(); 타입에 따라 사용 가능, 불가능 에러 채킹해줌
// 함수
function text() {
    console.log("TEXT");
    // 반환값이 없는 함수 void
}
function infiniteLoop() {
    while (true) {
        // 끝나지 않는 함수 never
    }
}
// null, undefined
let a0813 = null;
let b0813 = undefined;
// enum 이넘  0부터 차례대로 할당된다
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Strawberry"] = 0] = "Strawberry";
    Fruit[Fruit["Banana"] = 1] = "Banana";
    Fruit[Fruit["Melon"] = 3] = "Melon";
    Fruit[Fruit["grape"] = 11] = "grape";
    Fruit[Fruit["Pineapple"] = 12] = "Pineapple";
    Fruit["Blueberry"] = "\uBE14\uB8E8\uBCA0\uB9AC";
    // cherry,  글자 다음에 지정값이 없으면 에러가 뜬다
    Fruit[Fruit["Peach"] = 1] = "Peach";
    Fruit[Fruit["Kiwi"] = 2] = "Kiwi";
})(Fruit || (Fruit = {}));
console.log(Fruit[11]);
console.log(Fruit['Pineapple']);
console.log(Fruit['Blueberry']);
console.log(Fruit[1]);
let myFruit1;
myFruit1 = Fruit.Pineapple;
console.log(myFruit1);
let myFruit2 = Fruit.Melon;
console.log(myFruit2);
