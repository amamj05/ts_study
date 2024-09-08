"use strict";
//////////////////// keyof /////////////////////// 
//:객체 타입의 데이터에서 속성값들만 뽑아서 유니온타입으로 만들어준다 
const userEmail = "email";
const userid = "id";
// 속성들의 밸류값이 아닌 키값이 타입
//사용이유 1 안전한 접근
//사용이유 2 동적으로 접근
// 3 제네릭함수에서 속석접근 제한을 둬서 안전성 보장
//////////////////// keyof 활용 예제 잘안됨 /////////////////////// 
function getProperty(obj, key) {
    //     return obj[key];
    // }
    // function updateSettings<K extends keyof Book3>(key: K, value: Book3[K]) {
    //     console.log(`Setting ${key} updated to ${value}`);
    //     type ReadOnlyUser = {
    //         [K in keyof Book3<T>]: Book3<T>[K];
    //     }
    // getProperty(data.event, "coupon")
}
//     return obj[key];
// }
// function updateSettings<K extends keyof Book3>(key: K, value: Book3[K]) {
//     console.log(`Setting ${key} updated to ${value}`);
//     type ReadOnlyUser = {
//         [K in keyof Book3<T>]: Book3<T>[K];
//     }
// getProperty(data.event, "coupon")
