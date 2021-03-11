
async function printing() {

    let response1 = await fetch("https://restcountries.eu/rest/v2/capital/tallinn");
    let information1 = await response1.json();


    console.log(`Information for Estonia:`);
    console.log(information1[0].name);
    console.log(information1[0].capital);
    console.log(information1[0].region);
    console.log(information1[0].subregion);
    console.log(information1[0].topLevelDomain);
    let c = information1[0].currencies[0].code;
    console.log(`The currency of Estonia is ${c}`);

    console.log(`===============`);

    let response2 = await fetch(`https://restcountries.eu/rest/v2/currency/${c}`);
    let information2 = await response2.json();

    let howMany = information2.length;
    console.log(`There are ${howMany} countries that have currency ${c}. They are:`);
    for (let i = 0; i < howMany; i++) {
        console.log(information2[i].name);
    }
}
printing();

