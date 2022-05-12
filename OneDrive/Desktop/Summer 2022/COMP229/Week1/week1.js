//spread, rest

var myValue = Math.max(1,2,3);
//console.log(myValue);

function sum(...args){ //rest operator
    let numSum = 0;
    for(const arg of args){
        numSum+=args;
    }
    return numSum;
}

var myArray = [4,5,1,2];
console.log(sum(...myArray));//spread operation

function sumX(a,b,...args){
    let product = a*b;
    let numSum = 0;
    for (const arg of args){
        numSum+=arg
    }
    return [product, numSum];
}