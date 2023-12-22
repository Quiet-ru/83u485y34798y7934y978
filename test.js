document.getElementById('message').innerText = 'Привет мир!';
/*
window.alert('Привет мир!');
console.log('Привет мир!');
let x = 300;
console.log(300 - x);
const firstName = 'Quiet';
const valueOfPi = 3.142;
let isValid = true;
let jsObject = console;
let jsMethod = console.log;
let jsSymbol = Symbol();
let emptyVariable = null;
let unusedVariable;
console.log('firstName: ' + typeof firstName)
console.log('valueOfPi: ' + typeof valueOfPi)
console.log('isValid: ' + typeof isValid)
console.log('jsObject: ' + typeof jsObject)
console.log('jsMethod: ' + typeof jsMethod)
console.log('jsSymbol: ' + typeof jsSymbol)
console.log('emptyVariable: ' + typeof emptyVariable)
console.log('unusedVariable: ' + typeof unusedVariable)

let iffy = (function(){
    let str = 'Привет мир!!!';
    return str;
})()
console.log(iffy)
let anon = function(numOne, numTwo){
    let result = numOne + numTwo;
    return result;
}
console.log('Anonymous: '+anon(9,1));
let addition = add;
console.log('Assigned: ' + addition(32,64));
console.log('Hoisted: ' + add(100,200));
function add(numOne, numTwo){
    return numOne + numTwo;
}
function square (arg){
    return arg * arg;
}
function add (argOne, argTow = 10){
    return argOne + argTow;
}
function squareAdd (arg){
    let result = square(arg);
    return result + add(arg);
}
console.log("8 * 8 = " + square(8))
console.log("1 + 1 = " + add(1, 1))
console.log("8 + 10 = " + squareAdd(8))
*/

function readName(){
    let myName = "Quiet";
    console.log(myName)
}
readName()