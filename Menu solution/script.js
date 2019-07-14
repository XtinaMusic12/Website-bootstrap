const pizza = 12.00;
const burger = 5.00;
document.getElementById("plus-pizza").addEventListener("click", () => add("pizzaQuantity"));
document.getElementById("minus-pizza").addEventListener("click", () => minus("pizzaQuantity"));
document.getElementById("plus-burger").addEventListener("click", () => add("burgerQuantity"));
document.getElementById("minus-burger").addEventListener("click", () => minus("burgerQuantity"));

function add(x) {
    let currentValue = document.getElementById(x).innerHTML;
    currentValue++;
    document.getElementById(x).innerHTML = currentValue;
    if (currentValue >= 1) {
        if (x == 'pizzaQuantity') {
            let totalValue = Number(document.getElementById("totalprice").innerHTML);
            totalValue += pizza;
            document.getElementById("totalprice").innerHTML = totalValue;
        }
        else {
            let totalValue = Number(document.getElementById("totalprice").innerHTML);
            totalValue += burger;
            document.getElementById("totalprice").innerHTML = totalValue;
        }
    }

}
function minus(x) {
    let currentValue = document.getElementById(x).innerHTML;
    currentValue--;
    document.getElementById(x).innerHTML = currentValue;
    if (currentValue < 0) {
        document.getElementById(x).innerHTML = 0;
    }
    else if (x == 'pizzaQuantity') {
        let totalValue = Number(document.getElementById("totalprice").innerHTML);
        totalValue -= pizza;
        document.getElementById("totalprice").innerHTML = totalValue;
    }
    else {
        let totalValue = Number(document.getElementById("totalprice").innerHTML);
        totalValue -= burger;
        document.getElementById("totalprice").innerHTML = totalValue;
    }
}