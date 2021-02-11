let b = document.getElementById("myButton");
let tableHTML = document.getElementById("myTable");

b.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users/1")

        .then(function (response) {
            //  console.log(response);

            response.json().then(
                function (data) {
                    tableHTML.classList.add("colorTable");

                    let firstRow = document.createElement("tr");
                    let firstData = document.createElement("th");
                    let secondData = document.createElement("th");
                    let thirdData = document.createElement("th");
                    let fourthData = document.createElement("th");
                    let fifthData = document.createElement("th");
                    let sixthData = document.createElement("th");
                    let seventhData = document.createElement("th");
                    let eightData = document.createElement("th");

                    firstData.innerHTML = "ID";
                    secondData.innerHTML = "NAME";
                    thirdData.innerHTML = "USERNAME";
                    fourthData.innerHTML = "EMAIL";
                    fifthData.innerHTML = "ADDRESS";
                    sixthData.innerHTML = "PHONE";
                    seventhData.innerHTML = "WEBSITE";
                    eightData.innerHTML = "COMPANY";
                    firstRow.append(firstData, secondData, thirdData, fourthData, fifthData, sixthData, seventhData, eightData);
                    tableHTML.append(firstRow);

                    //========================================================

                    let secondRow = document.createElement("tr");
                    let firstData1 = document.createElement("td");
                    let secondData1 = document.createElement("td");
                    let thirdData1 = document.createElement("td");
                    let fourthData1 = document.createElement("td");
                    let fifthData1 = document.createElement("td");
                    let sixthData1 = document.createElement("td");
                    let seventhData1 = document.createElement("td");
                    let eightData1 = document.createElement("td");

                    firstData1.innerHTML = `${data.id}`;
                    secondData1.innerHTML = `${data.name}`;
                    thirdData1.innerHTML = `${data.username}`;
                    fourthData1.innerHTML = `${data.email}`;
                    fifthData1.innerHTML = `<ul> <li>STREET ${data.address.street}</li> <li>SUITE: ${data.address.suite}</li> <li>CITY: ${data.address.city}</li> <li>ZIPCODE ${data.address.zipcode}</li> <li>GEO<ul><li>LAT ${data.address.geo.lat}</li> <li>LNG ${data.address.geo.lng}</li> </ul> </li> </ul>`;
                    sixthData1.innerHTML = `${data.phone}`;
                    seventhData1.innerHTML = `${data.website}`;
                    eightData1.innerHTML = `<ul> <li>NAME: ${data.company.name}</li> <li>CATCH PHRASE: ${data.company.catchPhrase}</li> <li>BS: ${data.company.bs}</li> </ul>`;
                    secondRow.append(firstData1, secondData1, thirdData1, fourthData1, fifthData1, sixthData1, seventhData1, eightData1);
                    tableHTML.append(secondRow);


                }

            )
        })
        .catch(function (error) {
            console.log(error);
        });
});

