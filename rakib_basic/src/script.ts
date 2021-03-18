console.log("hello");

// Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”

var array: Array<Person> = [];

class Person {
   name:string;
//    img:string;
   age:number;
   jobTile:string;

   constructor(name:string, age:number,jobTile:string="unemployed"){
       this.name=name;
    //    this.img=img;
       this.age=age;
       this.jobTile=jobTile;

       array.push(this);

   }

   info(){
       return `<p>Hello there, My name is ${this.name}</p>
       <p> and I am ${this.age} years old,</p> <p>and I am ${this.jobTile}</p><br/>`;
   }


}

// let p1=new Person("rakib",32);

new Person("abdulla",32);
new Person("humayra",25,"teacher");
new Person("rakin",10,"student");
new Person("Eva",19,"salegirl");

// console.log(p1.info());
console.log(array);


array.forEach(element => {
   document.getElementById("demo").innerHTML +=element.info();    
});



// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”

let emArray :Array<employee>=[];

class employee extends Person{
    eSalary:number;
    eJobLocation:string;

    constructor(name:string, age:number,salary:number,joblocation:string,jobTile:string="unemployed"){
        super(name,age,jobTile);
        this.eSalary=salary;
        this.eJobLocation=joblocation;
        emArray.push(this);
    }
    salaryInYear(){
        return `${this.eSalary*14}`;
    }
    
 info(){
     return`${super.info()} I get ${this.eSalary} <b>Euro</b> every month and with bonus i get yearly ${this.salaryInYear()} <b>Euro</b>.`;
 }

}

new employee("Abdulla",32,1000,"vienna");
new employee("rakin",26,1300,"tirol","web Developer");
new employee("majed",22,1400,"salzburg","engineer");
new employee("sumayia",20,700,"bangladesh","salegirl");

emArray.forEach(element => {
   document.getElementById("demo1").innerHTML +="<hr>";    

   document.getElementById("demo1").innerHTML +=element.info();    
    
});


var vehArray:Array<vehicles>=[];

class vehicles{
    brand:string;
    manufac_data:(string|number);
    manufacturer:string;
    color:string;
    speed:number;
    wheels:number;
    vehType:string;

    constructor(brand:string,data:(string|number),nameOfmanufacturer:string,clr:string,spd:number, wheels:number,vehType:string="car"){
        this.brand=brand;
        
        this.manufac_data=data;
        this.manufacturer=nameOfmanufacturer;
        this.color=clr;
        this.speed=spd;
        this.wheels=wheels;
        this.vehType=vehType;
        vehArray.push(this);
    }
    run(){
        return`${this.speed} km/hr`;
    }
    info(){
        return `<p>brand is ${this.brand} that was manufactuered by ${this.manufacturer} and data of manufacturer is ${this.manufac_data}  color  ${this.color} ${this.wheels}wheels car speed ${this.run()} </p>`;
    }


}


new vehicles("bmw","2021MAR","Germany","red",230,4);
new vehicles("bmw","2021MAR","Germany","red",230,4);
new vehicles("VW","2002FEB","Germany","white",250,4);

console.log(vehArray);


vehArray.forEach(element => {
    document.getElementById("demo2").innerHTML +="<hr>";    
 
    document.getElementById("demo2").innerHTML +=element.info();    
     
 });



 class ambulence extends vehicles{
   

    constructor(){
        
    }
 }
 class caravan extends vehicles{
     
}
class bus extends vehicles{
     
}
class coach extends vehicles{
     
}
class Motorbike extends vehicles{
     
}
class truck extends vehicles{
     
}





























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