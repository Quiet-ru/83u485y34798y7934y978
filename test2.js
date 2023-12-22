function getName(){
    let myName = "Виталя";
    console.log(myName);
}
getName();
/*
const add = (function(){
    let count = 0;
    const nested = function(){return count = count +1}
    return nested
})()
console.log('Count is ' + add());
console.log('Count is ' + add());
console.log('Count is ' + add());
(function(){
    let sum, net = '25', tax = 5.00;
    sum = net + tax;
    console.log('Sum: ' + sum + ' ' + typeof sum);
    sum = parseFloat(net) + tax;
    console.log('Sum: ' + sum + ' ' + typeof sum);
    console.log('tax: ' + tax + ' ' + typeof tax);
    tax = tax.toString();
    console.log('tax: ' + tax + ' ' + typeof tax);
    net = '$' + net;
    console.log('net: ' + net + ' ' + parseInt(net));
    console.log('net Not a Numder? ' + isNaN(net));
})()
(function(){
    let sum = 80 + 20;
    console.log('Сложение: ' + sum);
    let sub = sum - 50;
    console.log('Вычитание: ' + sub);
    let mul = sum * 5;
    console.log('Умножение: ' + mul);
    let div = sum / 4;
    console.log('Деление: ' + div);
    let mod = sum % 2;
    console.log('Остаток от деления: ' + mod);
    let inc = ++sum;
    console.log('Инкремент: ' + inc);
    let dec = --sum;
    console.log('Декремент: ' + dec);
})()
(function(){
    let comparison, sum = 8, str ='JavaScript';
    comparison = str === 'JAVASCRIPT';
    console.log('String Equality? ' + comparison);
    comparison = str === 'JavaScript';
    console.log('String Equality? ' + comparison);
    comparison = sum === 8;
    console.log('Number Equality? ' + comparison);
    comparison = sum > 5;
    console.log('Greater Then? ' + comparison);
    comparison = sum < 5;
    console.log('Less Than? ' + comparison);
    comparison = sum <= 8;
    console.log('Less Than or Equal To? ' + comparison);
})();
(function(){
    let result, yes = true, no = false;
    result = yes && yes;
    console.log('Are both true? ' + result);
    result = yes && no;
    console.log('Are both still true? ' + result);
    result = yes || no;
    console.log('Are either true? ' + result);
    result = no || no;
    console.log('Are either still true? ' + result);
    console.log('Original value: ' + yes);
    yes = !yes;
    console.log('Toggled value? ' + yes);
})();
(function(){
    const numOne = 8, numTwo = 3;
    let verb = (numOne !==1)?'are ' : 'is ';
    console.log('There ' + verb + numOne);
    let parity = (numOne % 2 !== 0)? 'Odd' : 'Even';
    console.log(numOne + ' is ' + parity);
    parity = (numTwo % 2 !== 0)? 'Odd' : 'Even';
    console.log(numTwo + ' is ' + parity);
    let max = (numOne > numTwo)? numOne :numTwo;
    console.log(max + ' is the Greater Number');
})();
(function(){
    let msg = 'JavaScript'; msg += ' Fun';
    console.log('Add & concatenate: ' + msg);
    let sum = 5.00; sum +=2.50;
    console.log('Add & assign decimal: '+sum);
    sum = 8; sum -=4;
    console.log('Subtract & assign integer: '+sum);
    sum = 8; sum *=4;
    console.log('Multiply & assign integer: '+sum);
    sum = 8; sum /=4;
    console.log('Divide & assign integer: '+sum);
    sum = 8; sum %=4;
    console.log('Modulus & assign integer: '+sum);
})();
(function(){
    let numOne = 10, numTwo = 5;
    console.log('numOne: ' + numOne);
    console.log('numTwo: ' + numTwo);
    numOne = numOne^numTwo;
    numTwo = numOne^numTwo;
    numOne = numOne^numTwo;
    console.log('\n' + 'numOne: ' + numOne);
    console.log('numTwo: ' + numTwo);
})();
(function(){
    let sum = (9 + 12 )/3;
    console.log('Ungrouped sum: ' + sum);

})();
*/