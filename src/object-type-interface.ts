
let user: object

user = {
    name: "KIM",
    age: 20
}
// console.log(user.name);  



//////////////  type과 interface ////////////////////////////

type Person = {
    name: string;
    age: number;
};

let leeUser: Person = {
    name: "LEE",
    age: 20
};
console.log(leeUser.name);


interface objectUser {
    name: string;
    age: number;
}

let objUser: objectUser = {
    name: 'kim',
    age: 20
}

console.log(objUser.name);