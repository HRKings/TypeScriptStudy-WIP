//!Elements Block Start!!//
//Sum Elements
var input1Sum = document.getElementById("num1Sum");
var input2Sum = document.getElementById("num2Sum");
var buttonSum = document.getElementById("buttonSum");
var result2Sum = document.getElementById("resultSum");
//Subtraction Elements
var input1Sub = document.getElementById("num1Sub");
var input2Sub = document.getElementById("num2Sub");
var buttonSub = document.getElementById("buttonSub");
var result2Sub = document.getElementById("resultSub");
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
    var result = sum(Number(input1Sum.value), Number(input2Sum.value));
    if ((result2Sum === null || result2Sum === void 0 ? void 0 : result2Sum.textContent) !== null) {
        result2Sum.textContent = String(result);
    }
});
//Subtraction button Event
buttonSub === null || buttonSub === void 0 ? void 0 : buttonSub.addEventListener("click", function () {
    var result = sub(Number(input1Sub.value), Number(input2Sub.value));
    if ((result2Sub === null || result2Sub === void 0 ? void 0 : result2Sub.textContent) !== null) {
        result2Sub.textContent = String(result);
    }
});
console.log("Hi Log, this is an calculator application");
