function addTwoNumbers(number1, number2){
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}
var firstNumber = 35;
var secondNumber = 55;
var result = addTwoNumbers(firstNumber, secondNumber);
console.log('result value:', result);

//minus

function subTwoNumbers(multiNumber1, multiNumber2){
    console.log(multiNumber1, multiNumber2);
    var multiSubtotal = multiNumber1 - multiNumber2;
    return multiSubtotal;
}
var firstSubNumber = 70;
var secondSubNumber = 60;
var subResult = subTwoNumbers(firstSubNumber, secondSubNumber);
console.log('result value:', subResult);

//multi

function multiTwoNumbers(multiNumber1, multiNumber2){
    console.log(multiNumber1, multiNumber2);
    var multiSubtotal = multiNumber1 * multiNumber2;
    return multiSubtotal;
}
var firstMultiNumber = 70;
var secondMultiumber = 60;
var multiResult = multiTwoNumbers(firstMultiNumber, secondMultiumber);
console.log(' multiResult value:', multiResult);

//

function shopCount(orderQuantity,productPrice){
    console.log(orderQuantity, productPrice);
    var totalOrderCount = orderQuantity * productPrice;
    return totalOrderCount;
}
var customerOrder = 6;
var perProductPrice = 30;
var totalOrder = shopCount(customerOrder , perProductPrice);
console.log('totalOrder value:', totalOrder);