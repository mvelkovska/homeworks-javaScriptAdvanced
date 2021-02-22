let arrayofNames = ["Mirko", "Ana", "Marko", "Andrej", "Alek"];
let arrayofSurnames = ["Mirkovski", "Aneva", "Markovski", "Andreevski", "Aleksovski"];
let fullNames = [];

for (let i = 0; i < arrayofNames.length; i++) {
    (function (names, surnames) {
        fullNames.push(`${names[i]} ${surnames[i]}`);
        // console.log(`${names[i]} ${surnames[i]}`);
    })(arrayofNames, arrayofSurnames);
}

console.log(fullNames);
