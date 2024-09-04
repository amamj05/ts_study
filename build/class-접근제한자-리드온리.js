"use strict";
////////////////////////////////// private //////////////////////////////////
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Engine_engine, _readEngine_name;
class Engine {
    constructor() {
        _Engine_engine.set(this, "16기통"); // #engine
    }
    engineCheck() {
        console.log(`${__classPrivateFieldGet(this, _Engine_engine, "f")} 엔진입니다`); //this.#engine
    }
}
_Engine_engine = new WeakMap();
class Car extends Engine {
    constructor(dcolor, name, price) {
        super(); //부모클래스 호출
        this.dcolor = dcolor;
        this.name = name;
        this.price = price;
    }
    start() {
        console.log("Go!");
    }
}
const myCar = new Car("red", "myCar", 5000);
myCar.engineCheck(); //16기통 엔진입니다 출력
myCar.start(); //Go! 출력
////////////////////////////////// protected /////////////////////////////////
class protectedEngine {
    constructor() {
        this.engine = "16기통";
    }
    engineCheck() {
        console.log(`${this.engine} 엔진입니다`);
    }
}
class protectedCar extends protectedEngine {
    constructor(name, price) {
        super();
        this.name = name;
        this.price = price;
    }
    start() {
        console.log(`이 ${this.name} 자동차는 ${this.engine} 엔진입니다`);
    }
}
const protectedmyCar = new protectedCar("myCar", 5000);
protectedmyCar.engineCheck(); //16기통 엔진입니다 출력
protectedmyCar.start(); //이 myCar 자동차는 16기통 엔진입니다 출력
////////////////////////////////// readonly /////////////////////////////////
class readEngine {
    constructor(name, color) {
        this.engine = "16기통";
        this.color = "red";
        _readEngine_name.set(this, void 0);
        __classPrivateFieldSet(this, _readEngine_name, name, "f");
        this.color = color;
    }
    nameCheck() {
        console.log(`${__classPrivateFieldGet(this, _readEngine_name, "f")} 엔진입니다`);
    }
}
_readEngine_name = new WeakMap();
class readCar extends readEngine {
    constructor(name, price, color) {
        super(name, color);
        this.name = name;
        this.price = price;
    }
    start() {
        console.log(`이 ${this.name} 자동차는 ${this.engine} 엔진입니다`);
    }
}
const readmyCar = new readCar("myCar", 5000, "blue");
readmyCar.start();
readmyCar.nameCheck();
