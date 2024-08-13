
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


