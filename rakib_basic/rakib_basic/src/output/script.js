"use strict";
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
    }
    Person.prototype.info = function () {
        return "Hello there, My name is " + this.name + " and I am " + this.age + " years old, and I am  " + (this.jobTile == "" ? "unemployed" : "a ${this.jobTile}");
    };
    return Person;
}());
var p1 = new Person("rakib", 32);
console.log(p1.info());
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
