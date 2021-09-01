//!Elements Block Start!!//

//Sum Elements
const input1Sum = document.getElementById("num1Sum") as HTMLInputElement;
const input2Sum = document.getElementById("num2Sum") as HTMLInputElement;
const buttonSum = document.getElementById("buttonSum");
const result2Sum = document.getElementById("resultSum")
//Subtraction Elements
const input1Sub = document.getElementById("num1Sub") as HTMLInputElement;
const input2Sub = document.getElementById("num2Sub") as HTMLInputElement;
const buttonSub = document.getElementById("buttonSub");
const result2Sub = document.getElementById("resultSub");

//!!Elements Block End!!//

//Sum Function
function sum(a: number, b:number) {
    return a + b;
}
//Subtraction Function
function sub(a: number, b:number) {
    return a - b;
}

//Sum button Event
buttonSum?.addEventListener("click", function(){
    const result = sum(Number(input1Sum.value), Number(input2Sum.value));

    if (result2Sum?.textContent !== null) {
        result2Sum!.textContent = String(result);
    }
})
//Subtraction button Event
buttonSub?.addEventListener("click", function(){
    const result = sub(Number(input1Sub.value), Number(input2Sub.value));
    
    if (result2Sub?.textContent !== null) {
        result2Sub!.textContent = String(result);
    }
})

console.log("Hi Log, this is an calculator application");