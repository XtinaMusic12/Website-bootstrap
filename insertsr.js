var srbutton = document.getElementById('insertsr');
var spn;
var newLi;
var newSR;
var ordernb = 0;
var newcount;
var rsrbutton = document.getElementById('removesr');

srbutton.addEventListener("click", Insert_SR, false);
rsrbutton.addEventListener("click", Remove_LastItem, false);

function Insert_SR() {
    // Prompt User for Special Request:
    spn = prompt("Add a special request to the Menu: you can add up to 5.");
    // incrementing order number:
    ordernb++;
    // add the new count in the DOM:
    document.getElementById("ordernb").innerHTML = "Number of Special Requests: " + ordernb;
    // create new li elements:
    newLi = document.createElement("li");
    // add its content:
    newSR = document.createTextNode(spn);
    // add the text to the newly created li:
    newLi.appendChild(newSR);

    // add the newly created element and its content into the DOM 

    document.getElementById("specialrequest").appendChild(newLi);
}

function Remove_LastItem() {
    // removing last child:
    document.getElementById("specialrequest").removeChild(newLi);
    // decreasing order number:
    ordernb -= 1;
    // add the new count in the DOM:
    document.getElementById("ordernb").innerHTML = "Number of Special Requests: " + ordernb;
} 

