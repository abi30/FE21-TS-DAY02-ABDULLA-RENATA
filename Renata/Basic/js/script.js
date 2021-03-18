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
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.returnMessage = function () {
        return "Hello there, My name is " + this.name + " and I am " + this.age + " years old, and I am an " + this.jobTitle + ".";
    };
    return Person;
}());
var person = new Person("Tom Hanks", 64, "actor");
document.write(person.returnMessage() + "<br>");
var NewPerson = /** @class */ (function (_super) {
    __extends(NewPerson, _super);
    function NewPerson(name, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    NewPerson.prototype.returnNewMessage = function () {
        return _super.prototype.returnMessage.call(this) + " I work in " + this.jobLocation + " and I earn " + this.salary + " $. ";
    };
    return NewPerson;
}(Person));
var newPerson = new NewPerson("Tom Hanks", 64, "actor", 100000000, "USA");
document.write(newPerson.returnNewMessage());
