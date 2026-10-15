
// // Global Scope

// let userName = "Abdul";

// function showName() {
//     console.log(userName);
// }

// showName();

// console.log(userName);

// // Function Scope 
// function calculatePrice() {
//     let price = 500;
//     console.log(price);
// }

// calculatePrice();

// Example code 

// var a = 300
// let b = 300;

// if (true) {
//     var a = 5;
//     let b = 10;
//     const c = 15;
    
// console.log("Inner scope =",b);
// }

// console.log(b)
// yaha 5 print hoo ga kio kay var redecliar hoo jata hay 
// console.log(b)
// console.log(c)



// Use Strict mode check 

"use strict";

function calculatePrice() {
    let price = 2000;
    let quantity = 3;
    price = 3000;

    // totalPrice = price*quantity;
    // yaha yeh error day ga 

    let totalPrice = price*quantity;

    console.log(totalPrice);
}

calculatePrice();



// Rest Operator
const numbers = [10, 20, 30, 40];

const [first, ...rest] = numbers;

console.log(first);
console.log(rest);  

// spread operator

const original = [10, 20, 30];

const copy = [...original, ...original];

console.log(copy); 