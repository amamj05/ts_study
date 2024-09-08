
//////////////////// keyof /////////////////////// :객체 타입의 데이터에서 속성값들만 뽑아서 유니온타입으로 만들어준다 

interface UserKeyof {
    id: number,
    name: string,
    email: string,
    gender: "m" | "f" | "not choose"
}

