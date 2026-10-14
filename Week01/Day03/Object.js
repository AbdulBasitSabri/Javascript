

// const product = {
//     id: 101,
//     name: "Pendant Light",
//     category: "Wood",
//     price: 499,
//     quantity: 10,
//     inStock: true
// };

// product.price = 599;    

// console.log(product.name);
// console.log(product.price);
// console.log(product.quantity);


// Object may finction
// const student = {
//     name: "Abdul Basit",
//     marks: 85,

//     introduce: function () {
//         return "My name is "+ this.name;
//     }
// };

// console.log(student.introduce());



// Multiple Objects in Array 

// const students = [
//     { name: "Ali", marks: 78 },
//     { name: "Ahmed", marks: 62 },
//     { name: "Sara", marks: 89 }
// ];

// //  yeh apan nay loop laga dia 
// for (let i = 0; i < students.length; i++) {

//     console.log(students[i])
// }

// // yeh hay index vlaue say Excise kernay ka tariqa
// console.log(students[0].name);
// console.log(students[1].marks);
// console.log(students[2].name);




// Question Solve 

// const shopping_cart = {
//  product_name : "T Shirt",
//  Product_quality : "Dry Fit",
//  price : 1200,
//  quantity:3,

//  get_total (){
//     return this.price*this.quantity
//  }
// }

// console.log("Total Price Your Shirts = "+shopping_cart.get_total());



// Question 2 solve
let Deposit = require("readline")
let withdraw =require("Enter Your WithDraw Amount")


const bank_account = {
    owner_name :"Hazik",
    Amount : 20000,
    withdraw_amount : withdraw,
    Deposit_amount : Deposit,
deposit_func(){
 this.Amount + this.Deposit_amount
},
    total_balance(){
        return this.Amount-this.withdraw_amount
    }

}

console.log(bank_account.owner_name)
console.log("Total balance is = "+bank_account.total_balance());