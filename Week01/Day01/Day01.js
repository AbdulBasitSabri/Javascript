// Simple Function 

function name() {
    console.log("Hello World")
}
name();

// Parameterise Function jis may input value li jati hay 

function Price(Price,Quantity) {
    return Price*Quantity;
}
console.log(Price(10,5));

// Function Expression jis may hum Variable pehlay bana ker funtion banatay hain 

const add = function(a,b) {
    return a+b
}
console.log(add(50,25));

// Function in condition 


function Check_Even_odd(num) {
    if (num %2 ==0) {
        console.log("Your Number is Even")
    } else {
        console.log("Your Number is Odd")
    }
}

Check_Even_odd(10)

// Square root Function
function squreroot(num) {
    return num**2
}
console.log(squreroot(2));


// Percentage nikalmay ka formula 

function Percentage(Original_Price , Discount_Value) {
    return Original_Price*Discount_Value/100;
}
console.log(Percentage(500,10))




// Mini Project 

let English = 80;
let Urdu = 90;
let Mathematics = 70;
let NumSub = 3

function Std_Marks() {
    let total_num = English+Urdu+Mathematics;
    console.log("Total Number of all Subject",total_num);
    console.log("Average Number of all Subject",total_num/NumSub,"%");

    if (total_num >250) {
        console.log("Grade = A")
    }
    else if(total_num < 250){
        console.log("Grade = B")
    }
    else if(total_num <= 200){
        console.log("Grade = C")
    }
    else{
        console.log("Fail")
    }
}
Std_Marks()