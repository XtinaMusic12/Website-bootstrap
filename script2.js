var orderpizza = 0;
var orderburger = 0;

// for the total calculation
var pizza = 12;
var burger = 5;

var ordertotal = pizza * orderpizza + burger * orderburger;

// var integerp = parseInt(orderpizza, 10);
// var integerb = parseInt(orderburger, 10);

// adding event listeners on button click:
// var btnremovepizza = document.getElementByID('removepizza');
// var btnaddpizza = document.getElementByID('addpizza');
// var btnremoveburger = document.getElementByID('removeburger');
// var btnaddburger = document.getElementByID('addburger');

document.getElementByID('removepizza').addEventListener("click", Remove_Pizza);
document.getElementByID('addpizza').addEventListener("click", Add_Pizza);
document.getElementByID('removeburger').addEventListener("click", Remove_Burger);
document.getElementByID('addburger').addEventListener("click", Add_Burger);

// functions:
function Remove_Pizza() {

    if (orderpizza == 0) {

        document.getElementById("orderpizza").value = 0;

        document.getElementById("total").innerHTML = "Total Price " + ordertotal + " dollars.";

    } else {
        orderpizza--;

        document.getElementById("orderpizza").value = orderpizza;

        document.getElementById("total").innerHTML = "Total Price " + ordertotal + " dollars.";
    }
}

function Add_Pizza() {
    orderpizza++;

    document.getElementById("orderpizza").value = orderpizza;

    document.getElementById("total").innerHTML = "Total Price " + ordertotal + " dollars.";
}

function Remove_Burger() {

    if (orderburger == 0) {

        document.getElementById("orderburger").value = 0;

        document.getElementById("total").innerHTML = "Total Price " + ordertotal + " dollars.";

    } else {
        orderburger--;

        document.getElementById("orderbuger").value = orderburger;

        document.getElementById("total").innerHTML = "Total Price " + ordertotal + " dollars.";
    }
}

function Add_Burger() {
    orderburger++;

    document.getElementById("orderburger").value = orderburger;

    document.getElementById("total").innerHTML = "Total Price " + ordertotal + " dollars.";
}


