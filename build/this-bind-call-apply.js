"use strict";
///////////////////// ts에서의 this /////////////////////////////
const PARK = {
    name: "Park"
};
function printName() {
    console.log(this.name);
}
const p = printName.bind(PARK);
//printName의 함수에서 this를 명시적으로 지정하기위해 bind를 쓴다
p();
