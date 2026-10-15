
// Object Destructuring 
//  const product = {
//     p_name : "Watch",
//     p_price : 1200,
//     p_color : "Brown"
//  }

//  const {p_name:name, p_price: price , p_color:color} =  product
 
//  console.log(name)
//  console.log(price)
//  console.log(color)


//  Array Destructuring 

const products = [
    { id: 1, name: "Laptop", price: 80000 },
    { id: 2, name: "Mobile", price: 45000 },
    { id: 3, name: "Keyboard", price: 2500 },
    { id: 4, name: "Mouse", price: 1200 },
    { id: 5, name: "Monitor", price: 30000 },
    { id: 6, name: "Headphones", price: 3500 },
    { id: 7, name: "Tablet", price: 40000 },
    { id: 8, name: "Charger", price: 1500 },
    { id: 9, name: "Smart Watch", price: 8000 },
    { id: 10, name: "Speaker", price: 5000 }
];

const [product1,product2] = products

console.log(product1)
console.log(product2)