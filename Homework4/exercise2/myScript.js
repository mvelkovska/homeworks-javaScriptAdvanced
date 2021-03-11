function myFunction(parameter) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof (parameter) === "string") {
                let stringToUpper = parameter.toUpperCase();
                resolve(stringToUpper);
            }
            else
                reject(parameter);

        }, 4000);

    })
}


myFunction("someString")
    .then(success => console.log(success))
    .catch(error => console.log(error))



myFunction(66)
    .then(success => console.log(success))
    .catch(error => console.log(error))



