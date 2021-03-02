$(document).ready(function () {

    let myButton = $("#myButton");
    let myTable = $("#myTable");
    let nextButton = $("#next");
    let prevButton = $("#prev");
    let n = "";
    let p = "";
    nextButton.hide();
    prevButton.hide();


    let mainFunction = theUrl => {
        $.ajax({
            url: theUrl,

            success: response => {
                console.log("The request succeeded!");
                n = response.next;
                p = response.previous;

                function printEverything(t) {
                    t.append(`<tr>
    <th scope="col">#</th>
    <th scope="col">Name</th>
    <th scope="col">Population</th>
    <th scope="col">Climate</th>
    <th scope="col">Gravity</th>
  </tr>`);

                    for (let i = 0; i <= 9; i++) {
                        myTable.append(
                            `<tr>
                            <th scope="row">${i + 1}</th>
                            <td>${response.results[i].name}</td>
                            <td>${response.results[i].population}</td>
                            <td>${response.results[i].climate}</td>
                            <td>${response.results[i].gravity}</td>
                          </tr>`
                        );
                    }
                }

                if (p === null) { //prva

                    //  myTable.append(" ");
                    nextButton.show();
                    printEverything(myTable);
                }

                if (n && p) {  //megjustrani(2,3,4,5)vo slucajov
                    // myTable.append(" ");
                    nextButton.show();
                    prevButton.show();
                    printEverything(myTable);
                }

                if (n === null) {  //posledna strana

                    prevButton.show();
                    nextButton.hide();
                    printEverything(myTable);
                }
            },

            error: err => {
                console.log(err);
                console.log("Error!");
            }
        });
    }

    function getNumber(i) {                               //ovaa funkcija go vrakja brojcheto od url-to
        let stringLength = i.length;
        let numberFromUrl = i.charAt(stringLength - 1);
        let parsedUrl = Number(numberFromUrl);
        return parsedUrl;
    }

    myButton.click(() => { //inicijalno pri klik na kopcheto click me da se pojavat prvite 10
        mainFunction(`https://swapi.dev/api/planets/?page=1`);
    });

    nextButton.click(() => {
        myTable.text(" ");
        let parsedUrl = getNumber(n);
        console.log(parsedUrl);
        mainFunction(`https://swapi.dev/api/planets/?page=${parsedUrl}`);
    });

    prevButton.click(() => {
        myTable.text(" ");
        let parsedUrl = getNumber(p);
        console.log(parsedUrl);
        mainFunction(`https://swapi.dev/api/planets/?page=${parsedUrl}`);
    });

});

