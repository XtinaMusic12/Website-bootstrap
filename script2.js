var orderpizza = 1;
var orderburger = 1;

// for the total calculation
var pizza = 12;
var burger = 5;
var ordertotal;

// adding event listeners on button click:
var btnremovepizza = document.getElementByID("removepizza");
var btnaddpizza = document.getElementByID("addpizza");
var btnremoveburger = document.getElementByID("removeburger");
var btnaddburger = document.getElementByID("addburger");

btnremovepizza.addEventListener("click", Remove_Pizza, false);
btnaddpizza.addEventListener("click", Add_Pizza, false);
btnremoveburger.addEventListener("click", Remove_Burger, false);
btnaddburger.addEventListener("click", Add_Burger, false);

// functions:
function Remove_Pizza() {
    orderpizza -= 1;
    function OrderTotal();
    if (orderpizza < 0) {
        orderpizza = 0;
    } else {
        document.getElementById("orderpizza").innerHTML = orderpizza;
        document.getElementById("total").innerHTML = "Total Price " + ordertotal + " dollars.";
    }
}

function Add_Pizza() {
    orderpizza += 1;
    document.getElementById("orderpizza").innerHTML = orderpizza;
    function OrderTotal();
    document.getElementById("total").innerHTML = "Total Price " + ordertotal + " dollars.";
}

function Remove_Burger() {
    orderburger -= 1;
    function OrderTotal();
    if (orderburger < 0) {
        orderburger = 0;
    } else {
        document.getElementById("orderbuger").innerHTML = orderburger;
        document.getElementById("total").innerHTML = "Total Price " + ordertotal + " dollars.";
    }
}

function Add_Burger() {
    orderburger += 1;
    document.getElementById("orderburger").innerHTML = orderburger;
    function OrderTotal();
    document.getElementById("total").innerHTML = "Total Price " + ordertotal + " dollars.";
}

function OrderTotal() {
    ordertotal = orderpizza * pizza + orderburger * burger;
    return ordertotal;
}

