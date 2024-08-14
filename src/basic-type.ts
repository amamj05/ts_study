
// 숫자, 글자, 참거짓
let age:number = 30;
let nondisclosure:boolean = true;
let myName:string = "KIM";


// 배열
let arr:number[] = [1,2,3];
let arr2:Array<number> = [1,2,3];
let arr3:Array<string> = ["일","이","삼"];


// 튜플
let bTuple:[string, number];
bTuple = ['z', 1];

bTuple[0].toLowerCase();
// bTuple[1].toLowerCase(); 타입에 따라 사용 가능, 불가능 에러 채킹해줌



// 함수
function text():void {
    console.log("TEXT");
    // 반환값이 없는 함수 void
}

function infiniteLoop():never{
    while (true){
        // 끝나지 않는 함수 never
    }
}


// null, undefined
let a0813:null = null;
let b0813:undefined = undefined;


// enum 이넘  0부터 차례대로 할당된다
enum Fruit {
    Strawberry,
    Banana,
    Melon = 3,
    grape = 11,
    Pineapple,
    Blueberry = '블루베리',
    // cherry,  글자 다음에 지정값이 없으면 에러가 뜬다
    Peach = 1,  //출력하면 Peach만 나온다 (Banana 생략됨)
    Kiwi
}

console.log(Fruit[11]);
console.log(Fruit['Pineapple']);
console.log(Fruit['Blueberry']);
console.log(Fruit[1]);

let myFruit1:Fruit;
myFruit1 = Fruit.Pineapple;
console.log(myFruit1);

let myFruit2:Fruit = Fruit.Melon;
console.log(myFruit2);


/////////////// type Union  ////////////////////////////

type manyType = null | undefined | string;
type manyValue = 'Bus' | 'Car' | 'Bike' | 'Train';

// let typeTest1:manyType = 1;  타입에러
let typeTest2: manyType = null;
let typeTest3: manyType = "1";
let typeTest4: manyValue = 'Bike';
