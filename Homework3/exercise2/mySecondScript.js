
function Student(name, surname, age, city, avgGrade, gender) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.city = city;
    this.avgGrade = avgGrade;
    this.gender = gender;
}

let students =
    [
        new Student("n1", "s1", 12, "Skopje", 1, "Male"),
        new Student("n2", "s2", 20, "Skopje", 2, "Female"),
        new Student("n3", "s3", 18, "Berovo", 5, "Male"),
        new Student("n4", "s4", 16, "Skopje", 5, "Female"),
        new Student("n5", "s5", 25, "Ohrid", 15, "Male"),
        new Student("Bojan", "s6", 56, "Skopje", 20, "Male"),
        new Student("n7", "s7", 30, "Shtip", 5, "Female"),
        new Student("Boban", "s8", 26, "Kumanovo", 6, "Male"),
        new Student("n9", "s9", 25, "Tetovo", 35, "Female"),
        new Student("n10", "s10", 30, "Skopje", 2, "Female")

    ]

let avgHigherThan3 = students.filter(n => n.avgGrade > 3).forEach(n => { console.log(`${n.name} - ${n.avgGrade}`) });

console.log("=====================");

let femaleAvg5 = students.filter(n => n.avgGrade === 5 && n.gender === "Female").map(n => `${n.gender} - ${n.avgGrade}`);

console.log(femaleAvg5);

console.log("=====================");

let maleStudents = students.filter(n => n.city === "Skopje" && n.age > 18 && n.gender == "Male").map(n => `${n.city} - ${n.age} - ${n.gender}`);

console.log(maleStudents);

console.log("=====================");


let femaleStudents1 = students.filter(n => n.gender === "Female" && n.age > 24);

let femaleStudents2 = femaleStudents1.map(n => n.avgGrade);

let femaleStudents3 = femaleStudents2.reduce((sum, grade) => sum += grade, 0);

let femaleStudents4 = femaleStudents3 / femaleStudents2.length;

console.log(femaleStudents4);

console.log("=====================");

let maleStud = students.filter(n => n.gender === "Male" && n.avgGrade > 2 && n.name.startsWith("B")).map(n => `${n.name} - ${n.avgGrade} - ${n.gender}`)
console.log(maleStud);

function loadScript(url) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}


