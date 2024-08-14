interface Add {
    (num1: number, num2:number): number;
    // 인자값                   : 리턴값
}


const add2 : Add = function(a, b){
    return a + b;
}

console.log(add2(10,10));



//////////////////////////////////////////
interface returnBoolean {
    (age:number): boolean;
}

const adult:returnBoolean = (a)=>{
    return a > 19;
}

console.log(adult(30));