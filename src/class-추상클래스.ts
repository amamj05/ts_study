
abstract class Caar {
    constructor(public color: string) { }
    start() {
        console.log(`추상클래스 Car는 ${this.color} 색상이다`)
    }
    abstract func():void;  //추상메서드
}

// const myCar = new Caar("red"); 불가능

class BMW extends Caar {
    constructor(color: string) {
        super(color);
    }
    func(){
        this.start();
    }
}

const myCar2 = new BMW("red");
myCar2.func();