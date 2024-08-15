///////////////////// ts에서의 this /////////////////////////////

interface thisUser{
    name: string;
}

const PARK: thisUser = {
    name: "Park"
}

function printName(this:thisUser){
    console.log(this.name)
}

const p = printName.bind(PARK);   
//printName의 함수에서 this를 명시적으로 지정하기위해 bind를 쓴다
p();