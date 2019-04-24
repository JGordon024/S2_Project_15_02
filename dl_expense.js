"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 2

   Author: 
   Date:   
   
   Filename: dl_expenses.js
   
   Function List
   =============
   
   validateSummary()
      Validates the data entry in the summary field.
   
   calcClass(sumClass)
      Sums up all of the data values for elements of the sumClass class.
      
   calcExp()
      Calculates the travel expenses from all categories and dates.
      
   formatNumber(val, decimals)
      Formats the value, "val" to the number of decimals indicated 
      by "decimals", adding thousands separators.
      
   formatUSCurrency(val)
      Formats the value, "val", as U.S. currency.
      
*/
// When the window loads, it runs a function that runs a for loop that allows for the input elements in in the table to change, then when the submit button is clicked it validates the summary
window.addEventListener("load", function () {
      var changingCells = document.querySelectorAll("table#travelExp input.sum");
      for (var i = 0; i < changingCells.length; i++) {
            changingCells[i].onchange = calcExp
      }
      document.getElementById("submitButton").addEventListener("click", validateSummary);
})
// Creates a function that validates the summary input text box area, it pops up with a custom message that says that they need to do it (if they did not do it)
function validateSummary() {
      var summary = document.getElementById("summary");
      if (summary.validity.valueMissing) {
            summary.setCustomValidity("You must include a summary on your trip report");
      } else {
            summary.setCustomValidity("")
      }
}
// Creates a function that starts with 2 variables and then runs a for loop, it extracts the numeric value out of the sumfield variable and then if the itemvalue variable is a numeric value, it adds to sumTotal and the item value variables together. Finally, it returns the sumTotal
function calcClass(sumClass) {
      var sumFields = document.getElementsByClassName(sumClass);
      var sumTotal = 0;
      for (var i = 0; i < sumFields.length; i++) {
            var itemValue = parseFloat(sumFields[i].value);
            if (!isNaN(itemValue)) {
                  sumTotal += itemValue;
            }


      }
      return sumTotal
}
//Creates a function that lets us change the value of the table rows in the travelExp table
function calcExp() {
      var expTable = document.querySelectorAll("table#travelExp tbody tr")
      for (var i = 0; i < expTable.length; i++) {
            document.getElementById("subtotal" + i).value = formatNumber(calcClass("date" + i), 2);
      }
      //Tracks the input element total's of each column and takes it to the 2nd decimal point
      document.getElementById("mealTotal").value = formatNumber(calcClass("meal"), 2);
      document.getElementById("transTotal").value = formatNumber(calcClass("trans"), 2);
      document.getElementById("lodgeTotal").value = formatNumber(calcClass("lodge"), 2);
      document.getElementById("otherTotal").value = formatNumber(calcClass("other"), 2);
      document.getElementById("expTotal").value = formatUSCurrency(calcClass("sum"));


}




function formatNumber(val, decimals) {
      return val.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
      });
}

function formatUSCurrency(val) {
      return val.toLocaleString('en-US', {
            style: "currency",
            currency: "USD"
      });
}