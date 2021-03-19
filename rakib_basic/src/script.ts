// console.log("hello");

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


var vehArray:Array<vehicles>=[];

class vehicles{
    id:number;
    brand:string;
    img:string;
    manufac_date:string;
    seats:number;
    speed:number;
    wheels:number;
    vehType:string;
    price:number;

    constructor(brand:string,img:string,manufac_date:string,seats:number,spd:number, wheels:number,price:number,vehType:string="convertible"){
        this.brand=brand;
        this.img=img;
        this.manufac_date=manufac_date;
      
        this.seats=seats;
        this.speed=spd;
        this.wheels=wheels;
         this.price=price;
         this.vehType=vehType;
         this.id = Math.random()*1000000;
       
        vehArray.push(this);
    }
    run(){
        return`${this.speed} km/hr`;
    }
    showPrice(){
        return `${this.price}€`;
    }
    info(){
        return `<p>this ${this.vehType} is manufactured by  <b>${this.brand}</b>. it has ${this.seats} seats and <b>${this.wheels}</b> wheels.This ${this.vehType} has speed ${this.run()} </p>`;
    }


}



class ambulence extends vehicles{
   
    
    constructor(brand:string,img:string,manufac_date:string,seats:number,spd:number, wheels:number,price:number,vehType:string="car"){
        super(brand,img,manufac_date,seats,spd,wheels,price,vehType);
        vehArray.push();
        
    }
    run(){
        return`${this.speed} km/hr`;
    }
    showPrice(){
        return `${this.price}€`;
    }
    info(){
        return `${super.info()}`;
    }


 }



 class caravan extends vehicles{

 constructor(brand:string,img:string,manufac_date:string,seats:number,spd:number, wheels:number,price:number,vehType:string="car"){
        super(brand,img,manufac_date,seats,spd,wheels,price,vehType);
        vehArray.push();
        
    }
    run(){
        return`${this.speed} km/hr`;
    }
    showPrice(){
        return `${this.price}€`;
    }
    info(){
        return `${super.info()}`;
    }




     
}
class bus extends vehicles{

    constructor(brand:string,img:string,manufac_date:string,seats:number,spd:number, wheels:number,price:number,vehType:string="car"){
        super(brand,img,manufac_date,seats,spd,wheels,price,vehType);
        vehArray.push();
        
    }
    run(){
        return`${this.speed} km/hr`;
    }
    showPrice(){
        return `${this.price}€`;
    }
    info(){
        return `${super.info()}`;
    }

     
}
class coach extends vehicles{

    constructor(brand:string,img:string,manufac_date:string,seats:number,spd:number, wheels:number,price:number,vehType:string="car"){
        super(brand,img,manufac_date,seats,spd,wheels,price,vehType);
        vehArray.push();
        
    }
    run(){
        return`${this.speed} km/hr`;
    }
    showPrice(){
        return `${this.price}€`;
    }
    info(){
        return `${super.info()}`;
    }

     
}
class Motorbike extends vehicles{

    constructor(brand:string,img:string,manufac_date:string,seats:number,spd:number, wheels:number,price:number,vehType:string="car"){
        super(brand,img,manufac_date,seats,spd,wheels,price,vehType);
        vehArray.push();
        
    }
    run(){
        return`${this.speed} km/hr`;
    }
    showPrice(){
        return `${this.price}€`;
    }
    info(){
        return `${super.info()}`;
    }

     
}
class truck extends vehicles{

    constructor(brand:string,img:string,manufac_date:string,seats:number,spd:number, wheels:number,price:number,vehType:string="car"){
        super(brand,img,manufac_date,seats,spd,wheels,price,vehType);
        vehArray.push();
        
    }
    run(){
        return`${this.speed} km/hr`;
    }
    showPrice(){
        return `${this.price}€`;
    }
    info(){
        return `${super.info()}`;
    }

     
}



new vehicles("bmw","img/convertible.jpg","2002",4,230,4,4400);
new ambulence("vw","img/ambulence.jpg","2015",4,200,4,22000,"Ambulence");
new caravan("vw","img/caravan.jpg","2015",2,200,4,25000,"caravan");
new bus("vw","img/bus.jpg","2015",40,200,6,62000,"bus");
new truck("vw","img/truck.jpg","2015",1,200,8,20000,"truck");
new coach("vw","img/coach.jpg","2015",24,200,6,20000,"coach");
new Motorbike("vw","img/Motorbike.jpg","2015",4,200,2,200000,"Motorbike");

// new vehicles("bmw","2021MAR","Germany","red",230,4);
// new vehicles("VW","2002FEB","Germany","white",250,4);

console.log(vehArray);


let content:string="";


vehArray.forEach(vehicle =>content+= createCard(vehicle));

document.querySelector(`[data-meta="entry"]`)?.innerHTML=content;
registerButtons();
function createCard(vehicle:vehicles):string{
    let retVal:string=`<div class="col">
    <div class="card h-100 "  style="background-color: #1ff;">
    
      <img class="img-fluid own" src="${vehicle.img}" class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h2 class="card-title">${vehicle.vehType}</h2>
        <h5 class="list-group-item"><b>Brand:</b>${vehicle.brand}</h5>
        <p class="card-text" data-meta="info" data-id="${vehicle.id}">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" class="btn btn-outline-success"data-meta="button" data-id="${vehicle.id}" >info</button>
        <p data-meta="price" data-id="${vehicle.id}"></p>
        
      </div>
      <div class="card-footer">
        <small class="text-muted">manufacture date: ${vehicle.manufac_date}</small>
      </div>
    </div>
  </div>`;
    

return retVal;


}



function registerButtons() : void{
    document.querySelectorAll(`[data-meta="button"]`).forEach(button => button.addEventListener("click", showPrice));
  }
  
  function showPrice() : void {
      console.log("hell")
    for (let vehicle of vehArray) {
        if (vehicle.id == this.dataset.id) {
            document.querySelector(`[data-meta="info"][data-id="${this.dataset.id}"]`).innerHTML = `${vehicle.info()}`;
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