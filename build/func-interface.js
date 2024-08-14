"use strict";
const add2 = function (a, b) {
    return a + b;
};
console.log(add2(10, 10));
const adult = (a) => {
    return a > 19;
};
console.log(adult(30));
console.log(adult(10));
class BMW1 {
    constructor() {
        this.color = "red";
        this.wheels = 4;
    }
    fill() {
        console.log('fill up gasoline');
    }
}
class BMW2 {
    constructor(z) {
        this.wheels = 4;
        this.color = z;
        // 생성될때 입력 받기
    }
    fill() {
        console.log('fill up gasoline');
    }
}
const a = new BMW1();
const b = new BMW2('Blue');
console.log(a);
console.log(b);
b.fill();
