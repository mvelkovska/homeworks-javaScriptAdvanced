let myButton = $("#myButton");
let myTable = $("#myTable");
let nextButton = $("#next");
let prevButton = $("#prev");
let n = "";
let p = "";
nextButton.hide();
prevButton.hide();
$(document).ready(function () {
    let mainFunction = theUrl => {
        $.ajax({
            url: theUrl,

            success: response => {
                console.log("The request succeeded!");

                myTable.append(`<tr><td>===NAME===</td><td>===POPULATION===</td><td>===CLIMATE===</td><td>===GRAVITY===</td></tr>`);
                n = response.next;
                p = response.previous;

                for (let i = 0; i <= 9; i++) {
                    myTable.append(`<tr>`);
                    createTable(myTable, response.results[i].name);
                    createTable(myTable, response.results[i].population);
                    createTable(myTable, response.results[i].climate);
                    createTable(myTable, response.results[i].gravity);
                    myTable.append(`</tr>`);

                }
            },
            error: err => {
                console.log(err);
                console.log("Error!");
            }

        });
    }

    myButton.click(() => {
        myTable.html("");
        mainFunction("https://swapi.dev/api/planets/?page=2");
        nextButton.show();
        prevButton.hide();
    })

    nextButton.click(() => {
        myTable.html("");
        mainFunction(n);
        nextButton.hide();
        prevButton.show();
    })

    prevButton.click(() => {
        myTable.html("");
        mainFunction(p);
        prevButton.hide();
        nextButton.show();
    })


    function createTable(t, res) {
        t.append(`<td> ${res} </td>`);
    }

});