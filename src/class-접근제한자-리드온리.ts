////////////////////////////////// private //////////////////////////////////

class Engine {
    #engine: string = "16기통";  // #engine
    engineCheck() {
        console.log(`${this.#engine} 엔진입니다`);  //this.#engine
    }
}

class Car extends Engine {
    constructor(
        protected dcolor: string,
        private name: string,
        public price: number) {
        super();  //부모클래스 호출
    }
    start() {
        console.log("Go!")
    }
}

const myCar = new Car("red", "myCar", 5000);
myCar.engineCheck()  //16기통 엔진입니다 출력
myCar.start();  //Go! 출력


////////////////////////////////// protected /////////////////////////////////

class protectedEngine {
    protected engine: string = "16기통";
    engineCheck() {
        console.log(`${this.engine} 엔진입니다`);
    }
}

class protectedCar extends protectedEngine {
    constructor(
        private name: string,
        public price: number) {
        super();
    }
    start() {
        console.log(`이 ${this.name} 자동차는 ${this.engine} 엔진입니다`);
    }
}

const protectedmyCar = new protectedCar("myCar", 5000);
protectedmyCar.engineCheck()  //16기통 엔진입니다 출력
protectedmyCar.start();  //이 myCar 자동차는 16기통 엔진입니다 출력



////////////////////////////////// readonly /////////////////////////////////

class readEngine {
    readonly engine: string = "16기통";
    readonly color: string = "red";
    #name: string;
    constructor(name: string, color: string) {
        this.#name = name;
        this.color = color;
    }
    nameCheck() {
        console.log(`${this.#name} 엔진입니다`);
    }
}

class readCar extends readEngine {
    constructor(
        private name: string,
        public price: number,
        color: string) {
        super(name, color);
    }
    start() {
        console.log(`이 ${this.name} 자동차는 ${this.engine} 엔진입니다`);
    }
}

const readmyCar = new readCar("myCar", 5000, "blue");
readmyCar.start();
readmyCar.nameCheck();