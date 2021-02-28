$(document).ready(function () {


    function main() {
        $.ajax({
            mode: "no-cors",
            headers: {
                "Access-Control-Allow-Origin": "*",  
            },

            url:"https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
            success: function (result) {
               let r=JSON.parse(result);
            //    console.log(r);

               // THE CODE SHOULD HAVE BEEN HERE, IF I DIDN'T HAVE PROBLEMS WITH CORS

            },
            error: function (err) {
                console.log("Sorry,the request failed");
                console.log(err);
            }

        });
    }

    main();
});



