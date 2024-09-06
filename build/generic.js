"use strict";
function Generic(arr) {
    return arr[0];
}
const arrG1 = [1, 2, 3];
Generic(arrG1);
function GenericT(arr) {
    return arr.length;
}
function GenericA(arr) {
    return arr[0];
}
const arrG2 = [1, 2, 3];
console.log(GenericT(arrG1));
console.log(GenericA(arrG1));
const arrNum = [1, 2, 3];
const arrStr = ["a", "b", "c"];
const arrBool = [true, false, true];
console.log("arrNum의 length: " + GenericT(arrNum));
console.log("arrNum의 length: " + GenericT(arrStr));
console.log("arrNum의 length: " + GenericT(arrBool));
///////////////////////////////////////////
function print(data) {
    if (typeof data === "string") {
        console.log(`입력하신 글자는 ${data}입니다`);
    }
    else if (typeof data === "number") {
        console.log(`입력하신 숫자는 ${data}입니다`);
    }
    else if (typeof data === "boolean") {
        console.log(`입력하신 참거짓은 ${data}입니다`);
    }
}
const dataG1 = 2;
const dataG2 = "b";
const dataG3 = false;
print(dataG1);
print(dataG2);
print(dataG3);
function printT(data) {
    if (typeof data === "string") {
        console.log(`입력하신 글자는 ${data}입니다`);
    }
    else if (typeof data === "number") {
        console.log(`입력하신 숫자는 ${data}입니다`);
    }
    else if (typeof data === "boolean") {
        console.log(`입력하신 참거짓은 ${data}입니다`);
    }
}
printT(dataG1);
printT(dataG2);
printT(dataG3);
///////////////////////////////////////////
function printEx(data) {
    if (typeof data === "string") {
        console.log(`입력하신 글자는 ${data}입니다`);
    }
    else {
        console.log(`입력데이터를 확인해주세요`);
    }
}
//printEx(dataG1)
printEx(dataG2);
// interface Book2 {
//     price: number;
// }
function printBook1(data) {
    console.log(`주문하신 책의 이름은 ${data.name}입니다`);
}
const bookG1 = { name: "타입스크립트 강좌", price: 15000 };
const bookG2 = { price: 15000 };
printBook1(bookG1);
printBook1(bookG2);
const bookG3 = {
    name: "타입스크립트 강좌",
    price: 15000,
    event: "8월 이벤트 10% 할인"
};
const bookG4 = {
    name: "유니온/교차타입 강좌",
    price: 15000,
    event: {
        coupon: "9월 사은품 증정이벤트",
        number_: 1
    }
};
const bookG5 = {
    name: "타입스크립트 클래스 강좌",
    price: 15000,
    event: null
};
function printBook(data) {
    if (typeof data.event === "string") {
        console.log(`주문하신 책의 이름은 ${data.name}이며, 적용된 이벤트는 ${data.event}입니다`);
    }
    else if (typeof data.event === "object" && data.event) {
        // let coupon_ = data.event as {coupon?:string};
        console.log(`주문하신 책의 이름은 ${data.name}이며, 적용된 이벤트는 ${data.event.coupon}입니다`);
    }
    else if (data.event === null) {
        console.log(`주문하신 책의 이름은 ${data.name}이며, 적용된 이벤트는 없습니다`);
    }
    else {
        console.log("예기치못한 오류가 발생했습니다");
    }
}
printBook(bookG3);
printBook(bookG4);
printBook(bookG5);
console.log(JSON.stringify(bookG4.event.coupon));
console.log(bookG5.event);
///////////////////////////////////////////
const arrG3 = [];
// arrG3.push(1)
// arrG3.push("a")
// arrG3.push(false)
// console.log(Generic(arrG3))
// const arrG2 = ["a", "b", "c"];
// Generic(arrG2)
const arrG4 = [true, false, true];
