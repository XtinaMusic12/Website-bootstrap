var srbutton = document.getElementById('insertsr');
var spn;

srbutton.addEventListener("click", Insert_SR, false);


function Insert_SR() {
    // Prompt User for Special Request:
    spn = prompt("Add a special request to the Menu: you can add up to 5.");
    // create new li elements:
    var spnli = document.createElement("li");
    // add its content:
    var newSR = document.createTextNode(spn);
    // add the text to the newly created li:
    spnli.appendChild(newSR);

    // add the newly created element and its content into the DOM 
    var currentLi = document.getElementById("specialrequest");
    document.body.insert(spnli, currentLi);

    // spnli.document.getElementById("specialrequest").appendChild(spn);
} 

