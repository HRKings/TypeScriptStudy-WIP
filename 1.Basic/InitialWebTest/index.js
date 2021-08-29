"use strict";
//!Elements Block Start!!//
//Sum Elements
var input1Sum = document.getElementById("num1Sum");
var input2Sum = document.getElementById("num2Sum");
var buttonSum = document.getElementById("buttonSum");
//Subtraction Elements
var input1Sub = document.getElementById("num1Sub");
var input2Sub = document.getElementById("num2Sub");
var buttonSub = document.getElementById("buttonSub");
//!!Elements Block End!!//
//Sum Function
function sum(a, b) {
    return a + b;
}
//Subtraction Function
function sub(a, b) {
    return a - b;
}
//Sum button Event
buttonSum === null || buttonSum === void 0 ? void 0 : buttonSum.addEventListener("click", function () {
    console.log(sum(Number(input1Sum.value), Number(input2Sum.value)));
});
//Subtraction button Event
buttonSub === null || buttonSub === void 0 ? void 0 : buttonSub.addEventListener("click", function () {
    console.log(sub(Number(input1Sub.value), Number(input2Sub.value)));
});
console.log("Hi Log, this is an calculator application");
