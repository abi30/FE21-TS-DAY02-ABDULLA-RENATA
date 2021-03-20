"use strict";
// console.log("hello");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
// // Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”
// var array: Array<Person> = [];
// class Person {
//    name:string;
// //    img:string;
//    age:number;
//    jobTile:string;
//    constructor(name:string, age:number,jobTile:string="unemployed"){
//        this.name=name;
//     //    this.img=img;
//        this.age=age;
//        this.jobTile=jobTile;
//        array.push(this);
//    }
//    info(){
//        return `<p>Hello there, My name is ${this.name}</p>
//        <p> and I am ${this.age} years old,</p> <p>and I am ${this.jobTile}</p><br/>`;
//    }
// }
// // let p1=new Person("rakib",32);
// new Person("abdulla",32);
// new Person("humayra",25,"teacher");
// new Person("rakin",10,"student");
// new Person("Eva",19,"salegirl");
// // console.log(p1.info());
// console.log(array);
// array.forEach(element => {
//    document.getElementById("demo").innerHTML +=element.info();    
// });
// // Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
// let emArray :Array<employee>=[];
// class employee extends Person{
//     eSalary:number;
//     eJobLocation:string;
//     constructor(name:string, age:number,salary:number,joblocation:string,jobTile:string="unemployed"){
//         super(name,age,jobTile);
//         this.eSalary=salary;
//         this.eJobLocation=joblocation;
//         emArray.push(this);
//     }
//     salaryInYear(){
//         return `${this.eSalary*14}`;
//     }
//  info(){
//      return`${super.info()} I get ${this.eSalary} <b>Euro</b> every month and with bonus i get yearly ${this.salaryInYear()} <b>Euro</b>.`;
//  }
// }
// new employee("Abdulla",32,1000,"vienna");
// new employee("rakin",26,1300,"tirol","web Developer");
// new employee("majed",22,1400,"salzburg","engineer");
// new employee("sumayia",20,700,"bangladesh","salegirl");
// emArray.forEach(element => {
//    document.getElementById("demo1").innerHTML +="<hr>";    
//    document.getElementById("demo1").innerHTML +=element.info();    
// });
var vehArray = [];
var vehicles = /** @class */ (function () {
    function vehicles(brand, img, manufac_date, seats, spd, wheels, price, vehType) {
        if (vehType === void 0) { vehType = "convertible"; }
        this.brand = brand;
        this.img = img;
        this.manufac_date = manufac_date;
        this.seats = seats;
        this.speed = spd;
        this.wheels = wheels;
        this.price = price;
        this.vehType = vehType;
        this.id = Math.random() * 1000000;
        vehArray.push(this);
    }
    vehicles.prototype.run = function () {
        return this.speed + " km/hr";
    };
    vehicles.prototype.showPrice = function () {
        return this.price + "\u20AC";
    };
    vehicles.prototype.info = function () {
        return "<p>this " + this.vehType + " is manufactured by  <b>" + this.brand + "</b>. it has " + this.seats + " seats and <b>" + this.wheels + "</b> wheels.This " + this.vehType + " has speed " + this.run() + " </p>";
    };
    return vehicles;
}());
var ambulence = /** @class */ (function (_super) {
    __extends(ambulence, _super);
    function ambulence(brand, img, manufac_date, seats, spd, wheels, price, vehType) {
        if (vehType === void 0) { vehType = "car"; }
        var _this = _super.call(this, brand, img, manufac_date, seats, spd, wheels, price, vehType) || this;
        vehArray.push();
        return _this;
    }
    ambulence.prototype.run = function () {
        return this.speed + " km/hr";
    };
    ambulence.prototype.showPrice = function () {
        return this.price + "\u20AC";
    };
    ambulence.prototype.info = function () {
        return "" + _super.prototype.info.call(this);
    };
    return ambulence;
}(vehicles));
var caravan = /** @class */ (function (_super) {
    __extends(caravan, _super);
    function caravan(brand, img, manufac_date, seats, spd, wheels, price, vehType) {
        if (vehType === void 0) { vehType = "car"; }
        var _this = _super.call(this, brand, img, manufac_date, seats, spd, wheels, price, vehType) || this;
        vehArray.push();
        return _this;
    }
    caravan.prototype.run = function () {
        return this.speed + " km/hr";
    };
    caravan.prototype.showPrice = function () {
        return this.price + "\u20AC";
    };
    caravan.prototype.info = function () {
        return "" + _super.prototype.info.call(this);
    };
    return caravan;
}(vehicles));
var bus = /** @class */ (function (_super) {
    __extends(bus, _super);
    function bus(brand, img, manufac_date, seats, spd, wheels, price, vehType) {
        if (vehType === void 0) { vehType = "car"; }
        var _this = _super.call(this, brand, img, manufac_date, seats, spd, wheels, price, vehType) || this;
        vehArray.push();
        return _this;
    }
    bus.prototype.run = function () {
        return this.speed + " km/hr";
    };
    bus.prototype.showPrice = function () {
        return this.price + "\u20AC";
    };
    bus.prototype.info = function () {
        return "" + _super.prototype.info.call(this);
    };
    return bus;
}(vehicles));
var coach = /** @class */ (function (_super) {
    __extends(coach, _super);
    function coach(brand, img, manufac_date, seats, spd, wheels, price, vehType) {
        if (vehType === void 0) { vehType = "car"; }
        var _this = _super.call(this, brand, img, manufac_date, seats, spd, wheels, price, vehType) || this;
        vehArray.push();
        return _this;
    }
    coach.prototype.run = function () {
        return this.speed + " km/hr";
    };
    coach.prototype.showPrice = function () {
        return this.price + "\u20AC";
    };
    coach.prototype.info = function () {
        return "" + _super.prototype.info.call(this);
    };
    return coach;
}(vehicles));
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(brand, img, manufac_date, seats, spd, wheels, price, vehType) {
        if (vehType === void 0) { vehType = "car"; }
        var _this = _super.call(this, brand, img, manufac_date, seats, spd, wheels, price, vehType) || this;
        vehArray.push();
        return _this;
    }
    Motorbike.prototype.run = function () {
        return this.speed + " km/hr";
    };
    Motorbike.prototype.showPrice = function () {
        return this.price + "\u20AC";
    };
    Motorbike.prototype.info = function () {
        return "" + _super.prototype.info.call(this);
    };
    return Motorbike;
}(vehicles));
var truck = /** @class */ (function (_super) {
    __extends(truck, _super);
    function truck(brand, img, manufac_date, seats, spd, wheels, price, vehType) {
        if (vehType === void 0) { vehType = "car"; }
        var _this = _super.call(this, brand, img, manufac_date, seats, spd, wheels, price, vehType) || this;
        vehArray.push();
        return _this;
    }
    truck.prototype.run = function () {
        return this.speed + " km/hr";
    };
    truck.prototype.showPrice = function () {
        return this.price + "\u20AC";
    };
    truck.prototype.info = function () {
        return "" + _super.prototype.info.call(this);
    };
    return truck;
}(vehicles));
new vehicles("bmw", "img/convertible.jpg", "2002", 4, 230, 4, 4400);
new ambulence("vw", "img/ambulence.jpg", "2015", 4, 200, 4, 22000, "Ambulence");
new caravan("vw", "img/caravan.jpg", "2015", 2, 200, 4, 25000, "caravan");
new bus("vw", "img/bus.jpg", "2015", 40, 200, 6, 62000, "bus");
new truck("vw", "img/truck.jpg", "2015", 1, 200, 8, 20000, "truck");
new coach("vw", "img/coach.jpg", "2015", 24, 200, 6, 20000, "coach");
new Motorbike("vw", "img/Motorbike.jpg", "2015", 4, 200, 2, 200000, "Motorbike");
// new vehicles("bmw","2021MAR","Germany","red",230,4);
// new vehicles("VW","2002FEB","Germany","white",250,4);
console.log(vehArray);
var content = "";
vehArray.forEach(function (vehicle) { return content += createCard(vehicle); });
(_a = document.querySelector("[data-meta=\"entry\"]")) === null || _a === void 0 ? void 0 : _a.innerHTML = content;
// document.getElementById("main_content")?.innerHTML=content;
registerButtons();
function createCard(vehicle) {
    var retVal = "<div class=\"col\">\n    <div class=\"card h-100 \"  style=\"background-color: #1ff;\">\n    \n      <img class=\"img-fluid own\" src=\"" + vehicle.img + "\" class=\"card-img-top\" alt=\"...\">\n      <div class=\"card-body text-center\">\n        <h2 class=\"card-title\">" + vehicle.vehType + "</h2>\n        <h5 class=\"list-group-item\"><b>Brand:</b>" + vehicle.brand + "</h5>\n        <p class=\"card-text\" data-meta=\"info\" data-id=\"" + vehicle.id + "\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n        <button type=\"button\" class=\"btn btn-outline-success\"data-meta=\"button\" data-id=\"" + vehicle.id + "\" >info</button>\n        <p data-meta=\"price\" data-id=\"" + vehicle.id + "\"></p>\n        \n      </div>\n      <div class=\"card-footer\">\n        <small class=\"text-muted\">manufacture date: " + vehicle.manufac_date + "</small>\n      </div>\n    </div>\n  </div>";
    return retVal;
}
function registerButtons() {
    document.querySelectorAll("[data-meta=\"button\"]").forEach(function (button) { return button.addEventListener("click", showPrice); });
}
function showPrice() {
    console.log("hell");
    for (var _i = 0, vehArray_1 = vehArray; _i < vehArray_1.length; _i++) {
        var vehicle = vehArray_1[_i];
        if (vehicle.id == this.dataset.id) {
            document.querySelector("[data-meta=\"info\"][data-id=\"" + this.dataset.id + "\"]").innerHTML = "" + vehicle.info();
        }
    }
}
//     document.getElementById("demo2").innerHTML +="<hr>";    
//     document.getElementById("demo2").innerHTML +=element.info();    
//  });
//     console.log(`Hello ${user.age>50?"Sir":"Mr."} ${user.name}`);
// var array: Array<Person> = [];
// class Person {
//   fName: string;
//   lName: string;
//   img: string;
//   constructor(a: string, b, c) {
//     this.fName = a;
//     this.lName = b;
//     this.img = c;
//     console.log(this);
//     array.push(this);
//     console.table(array);
//   }
//   showMessage() {
//     return `<p>${this.fName}</p>
//             <p>${this.lName}</p>
//             <img src="${this.img}">`
//   }
// }
// new Person("Ghiath", "Serri", "https://cdn.pixabay.com/photo/2021/03/11/10/32/leaves-6086723_960_720.jpg");
// new Person("Theo", "patkos", "https://cdn.pixabay.com/photo/2021/03/11/10/32/leaves-6086723_960_720.jpg");
// new Person("Acilio", "carraro", "https://cdn.pixabay.com/photo/2021/03/11/10/32/leaves-6086723_960_720.jpg");
// class Test extends Person {
//   salary: number;
//   constructor(a, b, c, x) {
//     super(a, b, c);
//     this.salary = x;
//     // array.push(this);
//   }
//   showMessage() {
//     return `${super.showMessage()} <p>and the salary is ${this.salary}</p> `;
//   }
// }
// new Test("test", "test", "https://cdn.pixabay.com/photo/2021/03/11/10/32/leaves-6086723_960_720.jpg", 3000);
// // var array = [person1, person2, person3];
// console.table(array);
// for (let val of array) {
//   document.getElementById("demo").innerHTML += val.showMessage();
// }
// document.getElementById("demo").innerHTML = person1.showMessage();
// document.getElementById("demo").innerHTML += person2.showMessage();
// document.getElementById("demo").innerHTML += person3.showMessage();
