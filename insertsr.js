var srbutton = document.getElementById('insertsr');
var spn;
var newLi;
var newSR;
var ordernb = 0;
var newcount;
var rsrbutton = document.getElementById('removesr');
var delbutton = document.getElementById('deleteall');
var list = document.getElementById('specialrequest');

srbutton.addEventListener("click", Insert_SR, false);
rsrbutton.addEventListener("click", Remove_LastItem, false);
delbutton.addEventListener("click", deleteAll, false);

function Insert_SR() {
    // incrementing order number:
    ordernb++;
    // add the new count in the DOM:
    document.getElementById("ordernb").innerHTML = "Number of Special Requests: " + ordernb;


    // Prompt User for Special Request:
    spn = prompt("Add a special request: you can add up to 5 orders.");


    // create new li elements:
    newLi = document.createElement("li");
    // add its content:
    newSR = document.createTextNode(spn);
    // add the text to the newly created li:
    newLi.appendChild(newSR);

    // add the newly created element and its content into the DOM 
    document.getElementById("specialrequest").appendChild(newLi);

    // Not letting customer order more than 5 Special Requests:
    if (ordernb === 5) {
        alert('You have reached the maximum special request orders. You can remove your last order and replace it.' + '\n\n' + 'Click on "Start Over" to write a new special requests list.');
        // srbutton.removeEventListener("click", Insert_SR);
    }
}

function Remove_LastItem() {
    // removing last child:
    document.getElementById("specialrequest").removeChild(newLi);
    // decreasing order number:
    ordernb -= 1;
    // add the new count in the DOM:
    document.getElementById("ordernb").innerHTML = "Number of Special Requests: " + ordernb;
} 

function deleteAll() {
    list.parentNode.removeChild(list);
    ordernb = 0;
    // add the new count in the DOM:
    document.getElementById("ordernb").innerHTML = "Number of Special Requests: " + ordernb;
}
