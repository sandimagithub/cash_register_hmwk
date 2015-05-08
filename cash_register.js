// document.addEventListener("DOMContentLoaded", function() { 

var runningTotal = 0; 
var $amountInput;
var $nameInput;
var $total;
var $form;
var $entries;
// using an anonymous function and prevent Default, not passing in the "event" as a parameter in the function
// $(document).ready(function(){ 
//   event.preventDefault();
//   updateTotalWithInput();
// })

//not using an anonymous function, passing it in on submit.
$(document).ready(function(){
  $amountInput = $("input#amountInput"); 
  $nameInput = $("input#nameInput"); 
  $total = $("#total");
  $form = $("form");
  $entries = $("#entries");
  $form.on("submit", updateReceipt);
})

function getPrice() {
  var currentInputAmount = $amountInput.val();
  currentInputAmount = parseFloat(currentInputAmount) || 0;
  return currentInputAmount;
}

function updateReceipt(event){
  event.preventDefault();
  //grab current price
  var price = getPrice();
  //grab current title
  var name = $nameInput.val();

  if (!price || price < 0 || !name) {
  return false;
  }

  addItem(price, name);
  updateTotal(price);
  $form.trigger("reset");
}

function addItem(price, title){
  var $itemTitle = $("<td>").text(title);
  var $itemPrice = $("<td>").text(price);
  var newRow = $("<tr>").append($itemTitle).append($itemPrice);
  $entries.append(newRow);
}

function updateTotal(price) {
 runningTotal = runningTotal + price; 
 $total.text("$" + runningTotal.toFixed(2));
}