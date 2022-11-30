var entry = document.getElementById("entry");
entry.addEventListener("click",displayDetails);

var row = 1;

function displayDetails() {
   var expense = document.getElementById("expense").value;
    var income = document.getElementById("income").value;
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;
    

var display = document.getElementById("display");

var newRow = display.insertRow(row);

var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);
var cell2 = newRow.insertCell(1);


cell3.innerHTML = expense;
cell2.innerHTML = income;
cell1.innerHTML = date;
cell2.innerHTML = amount;

row++;
}
