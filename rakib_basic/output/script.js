"use strict";
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
console.log("hello");
// Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”
var array = [];
var Person = /** @class */ (function () {
    function Person(name, age, jobTile) {
        if (jobTile === void 0) { jobTile = "unemployed"; }
        this.name = name;
        //    this.img=img;
        this.age = age;
        this.jobTile = jobTile;
        array.push(this);
    }
    Person.prototype.info = function () {
        return "<p>Hello there, My name is " + this.name + "</p>\n       <p> and I am " + this.age + " years old,</p> <p>and I am " + this.jobTile + "</p><br/>";
    };
    return Person;
}());
// let p1=new Person("rakib",32);
new Person("abdulla", 32);
new Person("humayra", 25, "teacher");
new Person("rakin", 10, "student");
new Person("Eva", 19, "salegirl");
// console.log(p1.info());
console.log(array);
array.forEach(function (element) {
    document.getElementById("demo").innerHTML += element.info();
});
// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
var emArray = [];
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(name, age, salary, joblocation, jobTile) {
        if (jobTile === void 0) { jobTile = "unemployed"; }
        var _this = _super.call(this, name, age, jobTile) || this;
        _this.eSalary = salary;
        _this.eJobLocation = joblocation;
        emArray.push(_this);
        return _this;
    }
    employee.prototype.salaryInYear = function () {
        return "" + this.eSalary * 14;
    };
    employee.prototype.info = function () {
        return _super.prototype.info.call(this) + " I get " + this.eSalary + " <b>Euro</b> every month and with bonus i get yearly " + this.salaryInYear() + " <b>Euro</b>.";
    };
    return employee;
}(Person));
new employee("Abdulla", 32, 1000, "vienna");
new employee("rakin", 26, 1300, "tirol", "web Developer");
new employee("majed", 22, 1400, "salzburg", "engineer");
new employee("sumayia", 20, 700, "bangladesh", "salegirl");
emArray.forEach(function (element) {
    document.getElementById("demo1").innerHTML += "<hr>";
    document.getElementById("demo1").innerHTML += element.info();
});
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
