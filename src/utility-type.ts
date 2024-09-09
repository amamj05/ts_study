
//////////////////// keyof /////////////////////// 
//:객체 타입의 데이터에서 속성값들만 뽑아서 유니온타입으로 만들어준다 

interface UserKeyof {
    id: number,
    name: string,
    email?: string,
    gender?: "m" | "f" | "not choose"
}

type UserProperty = keyof UserKeyof;

const userEmail: UserProperty = "email";
const userid: UserProperty = "id";


// 속성들의 밸류값이 아닌 키값이 타입
//사용이유 1 안전한 접근
//사용이유 2 동적으로 접근
// 3 제네릭함수에서 속석접근 제한을 둬서 안전성 보장


//////////////////// keyof 활용 예제 잘안됨 /////////////////////// 

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key];
// }
// function updateSettings<K extends keyof Book3>(key: K, value: Book3[K]) {
//     console.log(`Setting ${key} updated to ${value}`);
//     type ReadOnlyUser = {
//         [K in keyof Book3<T>]: Book3<T>[K];
//     }
// getProperty(data.event, "coupon")





//////////////////// partial<> /////////////////////// 
// : 모든 속성을 옵셔널 속성으로 바꿔준다

const Userpartial: Partial<UserKeyof> = {
    name: "Kim",
    gender: "m"
}


//////////////////// Required<> /////////////////////// 
// : 모든 속성을 필수 요소로 바꿔준다

const UserRequired: Required<UserKeyof> = {
    id: 1,
    name: "Kim",
    email: "test@gmail.com",
    gender: "m"
}


//////////////////// Readonly<> /////////////////////// 
// : 읽기 전용 속성으로 바꿔준다 

const UserReadonly: Readonly<UserKeyof> = {
    id: 1,
    name: "Kim",
    gender: "m"
}

//UserReadonly.id = 3;  수정 불가능



//////////////////// Record<K,T> /////////////////////// 
// K → Key
// T → Type


// 1
const score1: Record<"1" | "2" | "3" | "4", "A" | "B" | "C" | "D" | "F"> = {
    1: "A",
    2: "B",
    3: "F",
    4: "C"
}


// 2
type Grade = "1" | "2" | "3" | "4";
type Score_ = "A" | "B" | "C" | "D" | "F"

const score2: Record<Grade, Score_> = {
    1: "A",
    2: "B",
    3: "F",
    4: "C"
}

//////////////////// Pick<T, K> /////////////////////// 
// : 사용할 속성만 딱 적어서 사용한다 

interface UserPick {
    id: number,
    name: string,
    email: string,
    gender: "m" | "f" | "not choose"
}

const userPick: Pick<UserPick, "name" | "email"> = {
    name: "Kim",
    email: "kims@test.com"
}


//////////////////// Omit<T, K> /////////////////////// 
// : 사용하지 않을 속성을 적고 나머지만 사용한다

const userOmit: Omit<UserPick, "gender"> = {
    id: 1,
    name: "Kim",
    email: "kims@test.com"
}


//////////////////// Exclude<T1, T2> /////////////////////// 
// : Type1에서 Type2랑 곂치는 타입을 제거한다

type Type1 = string | number | boolean;
type test1 = Exclude<Type1, boolean>;  //Type1에서 boolean을 제외하고 사용
type test2 = Exclude<Type1, boolean | string>;  //Type1에서 boolean,string 을 제외하고 사용


//////////////////// NonNullable<T> /////////////////////// 
// : null과 undefined 타입을 제외한다

type Type2 = string | number | boolean | null | undefined;
type test3 = NonNullable<Type2>;