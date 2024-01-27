//Write code for the 1st task below this
function Person(name, age){
        this.name= name;
        this.age= age;
}
Person.prototype.greet= function(){
            console.log(`Hello,  ${this.name} with ${this.age} `);
};
const person1= new Person("Amit", 12);
person1.greet();
//Write your code above this line
//Write code for the 2nd task below this
function Student(name, age, studentId){
        this.studentId= studentId;
        Person.call(this, name, age);
}
Student.prototype=Object.create(Person.prototype); //inheriting prototype from person
Student.prototype.study= function(){
            console.log(`Student ${this.name} with studentId ${this.studentId} is studying`);
}

const student1= new Student("Amit", 12, 002);
student1.study();
//Write your code above this line
//Write code for the 3rd task below this
Person.prototype.introduce = function(){
    console.log(`The person name is ${this.name} with age ${this.age}.`)
}
const person2= new Person("Aman", 43);
person2.introduce();

const student2= new Student("Aman", 43, 001);
student2.introduce();
//Write your code above this line
//Write code for the 4th task below this
Student.prototype.greet= function(){
    console.log(`Student with name ${this.name} and studentId ${this.studentId}`)
}
const student3= new Student("Kamal", 23, 003);
student3.greet();
//Write your code above this line
//Write code for the 5th task below this
class Employee{
    constructor(name, title){
        this.name= name;
        this.title= title;
    }
}
const employee1= new Employee("Rahul", "Developer");
const person3= new Person("Rahul", 32);

console.log("Employee instace: ", employee1);
console.log("Person instace: ", person3);
//Write your code above this line


