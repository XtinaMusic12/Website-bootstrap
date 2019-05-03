var orderpizza = 0;
var orderburger = 0;

// for the total calculation
var pizza = 12;
var burger = 5;
var ordertotal = pizza * orderpizza + burger * orderburger;

// adding event listeners on button click:
// var btnremovepizza = document.getElementByID('removepizza');
// var btnaddpizza = document.getElementByID('addpizza');
// var btnremoveburger = document.getElementByID('removeburger');
// var btnaddburger = document.getElementByID('addburger');

// btnremovepizza.addEventListener("click", Remove_Pizza, false);
// btnaddpizza.addEventListener("click", Add_Pizza, false);
// btnremoveburger.addEventListener("click", Remove_Burger, false);
// btnaddburger.addEventListener("click", Add_Burger, false);

// functions:
function Remove_Pizza() {

    if (orderpizza < 0) {
        orderpizza = 0;
        document.getElementById("total").innerHTML = "Total Price " + ordertotal + " dollars.";
    } else {
        document.getElementById("orderpizza").value = --orderpizza;

        document.getElementById("total").innerHTML = "Total Price " + ordertotal + " dollars.";
    }
}

function Add_Pizza() {
    document.getElementById("orderpizza").value = orderpizza++;

    document.getElementById("total").innerHTML = "Total Price " + ordertotal + " dollars.";
}

function Remove_Burger() {

    if (orderburger < 0) {
        orderburger = 0;
        document.getElementById("total").innerHTML = "Total Price " + ordertotal + " dollars.";
    } else {
        document.getElementById("orderbuger").innerHTML = --orderburger;
        document.getElementById("total").innerHTML = "Total Price " + ordertotal + " dollars.";
    }
}

function Add_Burger() {
    document.getElementById("orderburger").innerHTML = ++orderburger;

    document.getElementById("total").innerHTML = "Total Price " + ordertotal + " dollars.";
}


