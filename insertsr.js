var srbutton = document.getElementById('insertsr');
var item1, item2, item3, item4, item5;
var text1, text2, text3, text4, text5;

srbutton.addEventListener("click", Insert_SR, false);


function Insert_SR() {
    item1 = prompt("Add a special request to the Menu: you can add up to 5.");
        text1 = "<ul>";
        text1 += "<li>" + item1 + "</li>";
        text1 = "</ul>";
    document.getElementById("item1").innerHTML = text1;
}


function SR_P2() {
    item2 = prompt("Add a special request to the Menu: you can add up to 5.");
    document.getElementById("item2").innerHTML = item2;
}


function SR_P3() {
    item3 = prompt("Add a special request to the Menu: you can add up to 5.");
    document.getElementById("item3").innerHTML = item3;
}


function SR_P4() {
    item4 = prompt("Add a special request to the Menu: you can add up to 5.");
    document.getElementById("item4").innerHTML = item4;
}


function SR_P5() {
    item5 = prompt("Add a special request to the Menu: you can add up to 5.");
    document.getElementById("item5").innerHTML = item5;
}

