function Person(id, firstName, lastName, age) {

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function () {
        console.log(`${firstName} ${lastName}`);
    }

}

function Animal(name, age) {
    this.name = name;
    this.age = age;

    this.eat = function () {
        console.log(`The ${this.name} is eating something`);
    }

    this.sleep = function () {
        console.log(`The ${this.name} is sleeping!`);
    }
}

function Cat(name, age, color, ownerID) {                 //nasleduva od Animal
    Object.setPrototypeOf(this, new Animal(name, age))
    this.color = color;
    this.ownerID = ownerID;

    this.meow = function () {
        console.log(`The cat ${this.name} says hello`);
    }

    this.detailsAboutOwner = function (info) {
        if (this.ownerID === null || this.ownerID === undefined || !this.ownerID) {
            console.log(`The cat doesn't have an owner!`);
        }
        else {
            let filtering = info.filter(i => this.ownerID === i.id).map(i => {  //ili forEach

                console.log(`Owner's id: ${i.id}`);
                console.log(`Owner's name: ${i.firstName}`);
                console.log(`Owner's surname: ${i.lastName}`);


            });

        }

    }
}

function PersianCat(name, age, color, ownerID, eyeColor) //nasleduva od Cat
{
    Object.setPrototypeOf(this, new Cat(name, age, color, ownerID));
    this.eyeColor = eyeColor;

    this.furDescription = function () {
        console.log(`The cat ${this.name} has full fur`);
    }
}

function RagDollCat(name, age, color, ownerID, weight, isFriendly) { //nasleduva od Cat
    Object.setPrototypeOf(this, new Cat(name, age, color, ownerID));

    this.weight = weight;
    this.isFriendly = isFriendly;


    this.printPersonality = function (type) {
        if (type === true) {
            console.log(`The cat is friendly!`);
            this.isFriendly = true;
        }
        else {
            console.log(`The cat is not friendly`);
            this.isFriendly = false;
        }
    }

}



// // let arrayofPeople=[
// //     let person1=new Person(222,"name1","surname1",25),
// //     let person2=new Person(333,"name2","surname2",26),
// //     let person3=new Person(444,"name3","surname3",20),
// //     let person4=new Person(555,"name4","surname4",19),
// //     let person5=new Person(666,"name5","surname5",15)
// // ];Ova zakomentiranovo najverojatno ne e pravilen nacin

let arrayofPeople = [
    new Person(222, "name1", "surname1", 25),
    new Person(333, "name2", "surname2", 26),
    new Person(444, "name3", "surname3", 20),
    new Person(555, "name4", "surname4", 19),
    new Person(666, "name5", "surname5", 15)
];

let colors = ["black", "white", "orange", "grey", "brown"];//0,1,2,3,4
// let cat1 = new Cat("catName1", 5, colors[2], arrayofPeople[0].id); 
// let cat2 = new Cat("catName2", 10, colors[1],arrayofPeople[1].id);

let cat1 = new Cat("catName1", 5, colors[2], 222);
let cat2 = new Cat("catName2", 10, colors[1], 333);


arrayofPeople[0].getFullName();

console.log(arrayofPeople[0]);

console.log(arrayofPeople[1]);

console.log(cat1);

console.log(cat2);

cat1.meow();

cat1.eat();

cat1.sleep();

cat1.detailsAboutOwner(arrayofPeople);

console.log(`=================`);

cat2.detailsAboutOwner(arrayofPeople);

let somePersianCat = new PersianCat("persianCat", 5, colors[4], 444, "brown");

somePersianCat.furDescription();

console.log(somePersianCat);

let someRagDollCat = new RagDollCat("ragdollcat1", 2, colors[3], 555, "6kg", Boolean);

console.log(someRagDollCat.isFriendly);

someRagDollCat.printPersonality(true);

console.log(someRagDollCat.isFriendly);

let secondRagDollCat = new RagDollCat("ragdollcat2", 2, colors[2], 666, "7kg", Boolean);

secondRagDollCat.printPersonality(false);

somePersianCat.detailsAboutOwner(arrayofPeople);
someRagDollCat.detailsAboutOwner(arrayofPeople);
secondRagDollCat.detailsAboutOwner(arrayofPeople);
