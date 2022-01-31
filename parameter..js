function bringSingara(taka){
 
    console.log('singara er jonno dise',taka);
    console.log('mama singara den',taka);
    var singaraPrice = 10;
    var sinagaraQuantity = taka / singaraPrice;
    return sinagaraQuantity;
}

var money = 250;
var singara = bringSingara(money);
console.log('ai nens', singara);