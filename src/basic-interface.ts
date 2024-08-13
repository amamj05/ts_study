// TypeScript의 객체 타입은 object 이다.
let user:object

interface User {
    name: string;
    age: number;
}

let useUser : User = {
    name : 'kim',
    age : 20
}