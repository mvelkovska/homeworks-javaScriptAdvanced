class Person {

    constructor(firstName, lastName, age, address) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }

    get firstName() {
        //console.log(`Wait until we get the first name`);
        //  return `This person's first name is ${this._firstName}`;
        return `${this._firstName}`;
    }

    set firstName(first_name) {
        //console.log(`We are setting the first name`);
        first_name.length >= 3 ? this._firstName = first_name : (() => { throw new Error("The first name is too short") })();
    }


    get lastName() {
        //console.log(`Wait until we get the last name`);
        // return `The person's last name is ${this._lastName}`;
        return `${this._lastName}`;
    }

    set lastName(last_name) {
        //console.log(`We are setting the last name`);
        last_name.length >= 3 ? this._lastName = last_name : (() => { throw new Error("The last name is too short") })();
    }

    get age() {
        //console.log(`Wait until we get the age`);
        //  return `The person's age is ${this._age}`;
        return `${this._age}`;
    }

    set age(the_age) {
        //  console.log(`We are setting the age`);
        the_age >= 1 ? this._age = the_age : (() => { throw new Error("The age is not valid") })();
    }


    get address() {
        //  console.log(`Wait until we get the address`);
        // return `The person's address is ${this._address}`;
        return `${this._address}`;
    }

    set address(the_address) {
        //  console.log(`We are setting the address`);
        the_address.length >= 3 ? this._address = the_address : (() => { throw new Error("The address is too short") })();
    }

    fullName() {
        console.log(`FULL NAME: ${this.firstName} ${this.lastName}`);
    }

}

class Student extends Person {
    constructor(firstName, lastName, age, address, arrayOfStrings, academy) {

        super(firstName, lastName, age, address);
        this.arrayOfStrings = arrayOfStrings;
        this.academy = academy;
    }

    static checking(student, subject) {
        if (student instanceof Student) {
            let flag = false;

            for (let i = 0; i < student.arrayOfStrings.length; i++) {
                if (student.arrayOfStrings[i] === subject) {
                    console.log(`The student ${student.firstName} studies ${subject}`);
                    flag = true;
                }
            }
            if (flag === false) {
                console.log(`The student ${student.firstName} doesn't study ${subject}`);
            }
        }
    }

}
let somePerson = new Person("John", "Doe", 25, "someAddress");
// console.log(somePerson._firstName); //setter
// console.log(somePerson._lastName); //setter
// console.log(somePerson._age);//setter
//console.log(somePerson._address);//setter
console.log(somePerson.firstName); //getter
console.log(somePerson.lastName); //getter
console.log(somePerson.age);//getter
console.log(somePerson.address);//getter

let student1 = new Student("Ana", "Angelova", 22, "random address", ["JavaScriptBasic", "cSharp", "HTML"], "SEDC");
let student2 = new Student("Marko", "Markovski", 20, "some address", ["Java", "C++", "C", "JavaScriptBasic"], "CodeAcademy");

student1.fullName();
student2.fullName();


Student.checking(student1, "JavaScriptBasic"); //yes
Student.checking(student1, "C");//no
Student.checking(student2, "C++"); //yes
Student.checking(student2, "cSharp");//no



