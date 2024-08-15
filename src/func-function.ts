function add3(z: number, x: number): number {
    //매개변수 타입     반환하는 데이터의 타입
    return z + x;
}


function add4(z: number, x: number): void {
    //반환하는 데이터가 없을 때 
    console.log(z + x);
}


///////////////////// 선택적 매개변수 (옵셔널) /////////////////////////////
function hi(name?: string) {
    return `${name || "우리"}의 마을에 오신것을 환영합니다`
}

const printHi = hi();
const printHiKIM = hi("KIM");
console.log(printHi)
console.log(printHiKIM)


///////////////////// 매개변수 기본값 /////////////////////////////
function hi2(name = "LEE") {
    return `${name}의 마을에 오신것을 환영합니다`
}

const printHiLEE = hi2();
console.log(printHiLEE)
const printHiPARK = hi2("PARK");
console.log(printHiPARK)


///////////////////// 매개변수 일부 옵셔널 /////////////////////////////
function hi3(name: string, since?: number) {
    //선택적 매개변수는 뒤쪽에 위치시켜야한다
    if (since !== undefined) {
        return `${name}의 마을에 오신것을 환영합니다. SINCE ${since}`
    }
    else {
        return `${name}의 마을에 오신것을 환영합니다`
    }
}

function hi4(since: number | undefined, name: string) {
    //선택적 매개변수를 앞에 두고 싶을때
    if (since !== undefined) {
        return `${name}의 마을에 오신것을 환영합니다. SINCE ${since}`
    }
    else {
        return `${name}의 마을에 오신것을 환영합니다`
    }
}


///////////////////// 배열 매개변수 /////////////////////////////
function add5(...num: number[]){
    return num.reduce((result, num)=> result + num, 0);
}

console.log(add5(1,2,3))
console.log(add5(1,2,3,4,5,6,7,8,9,10))