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
console.log(adult(10));



/////////////////  implements  ////////////////////////////

interface Car {
    color : string;
    wheels : number;
    fill(): void;
}

class BMW1 implements Car {
    color = "red";
    wheels = 4;
    fill(){
        console.log('fill up gasoline');
    }
}

class BMW2 implements Car {
    color;
    wheels = 4;
    constructor(z:string){
        this.color = z;
        // 생성될때 입력 받기
    }
    fill(){
        console.log('fill up gasoline');
    }
}
const a = new BMW1();
const b = new BMW2('Blue');
console.log(a)
console.log(b)
b.fill();