"use strict";
function add3(z, x) {
    //매개변수 타입     반환하는 데이터의 타입
    return z + x;
}
function add4(z, x) {
    //반환하는 데이터가 없을 때 
    console.log(z + x);
}
///////////////////// 선택적 매개변수 (옵셔널) /////////////////////////////
function hi(name) {
    return `${name || "우리"}의 마을에 오신것을 환영합니다`;
}
const printHi = hi();
const printHiKIM = hi("KIM");
console.log(printHi);
console.log(printHiKIM);
///////////////////// 매개변수 기본값 /////////////////////////////
function hi2(name = "LEE") {
    return `${name}의 마을에 오신것을 환영합니다`;
}
const printHiLEE = hi2();
console.log(printHiLEE);
const printHiPARK = hi2("PARK");
console.log(printHiPARK);
