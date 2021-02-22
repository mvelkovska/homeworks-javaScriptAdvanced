let inputValue = parseInt(prompt("Enter a positive number"));

let div = $("#myDiv");


let factoriel = i => {
    if (i === 1) {
        return 1;
    }
    else {
        return i * factoriel(i - 1);
    }

}


let checking = check => {

    if (isNaN(check)) {
        div.text("");
        div.text(`Please enter a number`);
        return false;
    }
    else if (check <= 0) {
        div.text("");
        div.text(`Enter a positive value`);
        return false;
    }
    else {
        return factoriel(inputValue);
    }
}
checking(inputValue);

if ((checking(inputValue))) {
    div.text((factoriel(inputValue)));
}

