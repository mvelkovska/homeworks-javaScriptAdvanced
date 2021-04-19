function Product(name, category, hasDiscount, price) {
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
}
let products =
    [new Product("name1", "food", true, 56),
    new Product("Aaa", "category1", false, 120),
    new Product("name3", "food", true, 8),
    new Product("Eee", "category1", false, 64),
    new Product("name5", "food", true, 66),
    new Product("name6", "food", true, 555),
    new Product("Iii", "category1", false, 12),
    new Product("name8", "food", true, 645),
    new Product("name9", "category1", false, 5345),
    new Product("Ooo", "category1", true, 446),
    new Product("name11", "category1", true, 10),
    new Product("Uuu", "food", true, 55),
    new Product("name13", "category1", true, 1),
    new Product("name14", "category1", true, 555),
    new Product("name15", "food", false, 5),
    ]

let greaterThan20 = products.filter(n => n.price > 20);    // REQUIREMENT 1
greaterThan20.forEach(n => { console.log(`${n.name} - ${n.price}`) });
console.log(greaterThan20);

console.log("=====================");

let categoryFoodDiscount = products.filter(n => (n.hasDiscount == true && n.category == "food")); //REQUIREMENT 2
categoryFoodDiscount.forEach(n => { console.log(`${n.name} - ${n.hasDiscount}`) });
console.log(categoryFoodDiscount);

console.log("=====================");

function avg(sum, product) {
    return sum += product;
}

let averagePricesFirstStep = products.filter(s => s.hasDiscount === true);   //REQUIREMENT 3
let averagePricesSecondStep = averagePricesFirstStep.map(s => s.price);
let averagePricesThirdStep = averagePricesSecondStep.reduce(avg, 0);
console.log(averagePricesThirdStep / averagePricesSecondStep.length);

console.log("=====================");


let vowelNotDiscount = products.filter(s => s.hasDiscount === false && s.name.match('^[aieouAIEOU].*')).map(n => { console.log(`${n.name} - ${n.price}`) }); //REQUIREMENT 4

console.log("=====================");

function copyArray(arr) {   //REQUIREMENT 5
    let copied = [];
    arr.forEach(x => copied.push(x));
    return copied;
}
let sorting = copyArray(products);

sorting = products.sort((s1, s2) => s1.price - s2.price);
sorting.forEach(s => console.log(s.price));
