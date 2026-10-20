
// Sync code
// console.log("Apple")
// console.log("Mango")
// console.log("Banana")



// Async Code

// console.log("Apple");

// setTimeout(() => {
//     console.log("Banana");
// }, 2000);

// console.log("Mango");


// Callback func
// function greet(name) {
//     console.log("Hello " + name);
// }

// function processUser(callback) {
//     callback("Basit");
// }

// processUser(greet);

// CallBack Hell Function
// setTimeout(() => {
//     console.log("1. Order placed");

//     setTimeout(() => {
//         console.log("2. Payment completed");

//         setTimeout(() => {
//             console.log("3. Food prepared");

//             setTimeout(() => {
//                 console.log("4. Food delivered");
//             }, 1000);

//         }, 1000);

//     }, 1000);

// }, 1000);


// Promises in Javascript 

// const mypromise = new Promise((resolve , reject)=>{
 
//     let foodOrder = true;

//     if (foodOrder){
//         resolve("Your Order Succesfull")
//     }
//     else{
//         reject("Your Order Rejected")
//     }
// });
//     mypromise.then((result)=>{
//         console.log(result)
//     })
//     .catch((error)=>{
//         console.log("Error")
//     });


//     fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Users load nahi hue");
//     }

//     return response.json();
//   })
//   .then((users) => {
//     console.log(users.slice(0,2));
//       })
//   .catch((error) => {
//     console.log("Error:", error.message);
//   });



  function getFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pizza ready!");
    }, 1000);
  });
}

async function orderFood() {
  console.log("1. Order place hua");

  const food = await getFood();

  console.log("2.", food);

  console.log("3. Ab pizza kha sakte hain");
}

orderFood();

console.log("4. Doosra kaam");


