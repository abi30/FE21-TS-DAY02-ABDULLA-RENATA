class Person{
    name:string;
    age:number;
    jobTitle:string;
    constructor(name:string,age:number,jobTitle:string){
        this.name=name;
        this.age=age;
        this.jobTitle=jobTitle;
    }
    returnMessage(){
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am an ${this.jobTitle}.`
    }
}
let person=new Person("Tom Hanks",64,"actor");




document.write(person.returnMessage()+"<br>")
 class NewPerson extends Person{
     salary:number;
     jobLocation:string;
     constructor(name:string,age:number,jobTitle:string,salary:number,jobLocation:string){
         super(name,age,jobTitle);
         this.salary=salary;
         this.jobLocation=jobLocation;
     }
     returnNewMessage(){
         return `${super.returnMessage()} I work in ${this.jobLocation} and I earn ${this.salary} $. `
     }
 }
 
 let newPerson=new NewPerson("Tom Hanks",64,"actor",100000000,"USA");
 document.write(newPerson.returnNewMessage());