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

window.addEventListener("load", function () {
      var changingCells = document.querySelectorAll('table#travelExp input[class="sum"]');
      for (var i = 0; i < changingCells.length; i++) {
            changingCells[i].addEventListener("onchange", calcExp);
      }
      document.getElementById("submitButton").addEventListener("click", validateSummary);
})

function validateSummary() {
      var summary = document.getElementById("summary");
      if (summary.validity.valueMissing) {
            summary.setCustomValidity("You must include a summary on your trip report");
      } else {
            summary.setCustomValidity("")
      }
}

function calcClass() {
      var sumFields = document.getElementsByClassName("sumClass");;
      var sumTotal = 0;
      for (var i = 0; i < sumFields.length; i++) {
            var itemValue = sumFields[i].parsefloat;
            if (itemValue === NaN) {
                  itemValue + itemValue;
            }
      }
      sumTotal.value
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