function shopCount(orderQuantity,productPrice,customerPayment){
    
    var totalOrderCount = orderQuantity * productPrice;
    console.log('Total biil',totalOrderCount);
    var moneyBack = totalOrderCount ;
    var moneyBackPayment = customerPayment - moneyBack;
    return  moneyBackPayment;
}

var customerOrder = 6;
var perProductPrice = 30;
var customerMoneyRecipt = 200;
var totalOrder = shopCount(customerOrder , perProductPrice,customerMoneyRecipt);
console.log('money back:', totalOrder);