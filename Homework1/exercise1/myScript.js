let t = document.getElementById("tekst");
// t.innerHTML += "<h3>The first 10 cities with details:</h3>"
t.innerHTML += "<h3>The first 10 pokemons with details:</h3>"
$(document).ready(function () {

    let myButton = $("Button");
    myButton.click(function () {
        $.ajax({
            mode: "no-cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
            },

            //      url: "https://api.openaq.org/v1/cities",
            url: "https://pokeapi.co/api/v2/pokemon",
            success: function (r) {
                let uls = document.createElement("ul");
                for (let i = 0; i < 10; i++) {
                    let element = document.createElement("li");
                    element.innerHTML = `<strong>NAME:</strong> ${r.results[i].name}   <strong>URL</strong> ${r.results[i].url}`;
                    //  element.innerHTML = `<strong>COUNTRY:</strong>  ${r.results[i].country} <strong>NAME:</strong> ${r.results[i].name} <strong>CITY:</strong> ${r.results[i].city} <strong>COUNT:</strong> ${r.results[i].count}  <strong>LOCATIONS:</strong> ${r.results[i].locations}`;
                    uls.appendChild(element);
                }
                t.appendChild(uls);
            },

            error: function (err) {
                console.log(err);
            }
        });
    });
});
