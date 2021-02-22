let myButton = $("#myButton");
let myTable = $("#myTable");
$(document).ready(function () {
    function mainFunction(theUrl) {
        myButton.click(function () {
            $.ajax({
                url: theUrl,

                success: response => {
                    console.log("The request succeeded!");
                    
                    myTable.append(`<tr><td>===NAME===</td><td>===POPULATION===</td><td>===CLIMATE===</td><td>===GRAVITY===</td></tr>`);
                   

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

        });
    }
    mainFunction(" https://swapi.dev/api/planets/?page=1");


    function createTable(t, res) {
        t.append(`<td> ${res} </td>`);
    }
   
});