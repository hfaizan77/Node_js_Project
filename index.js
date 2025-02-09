//Variables 

let foodExpense = 500;

let transportExpense = 300;

let shoppingExpense = 1000;

let totalExpense = foodExpense + transportExpense + shoppingExpense;

console.log("Total Expense: " + totalExpense);

// Datatypes


let name = "Faizan";

let age = 25;

let isStudent = false;

let isJobHolder = true;

let skills = ["JavaScript", "Backend", "Node.js"];

let address = { city: "Lahore", country: "Pakistan" };

let experience = null;

let futurePlan;

console.log("Name:", name);

console.log("Age:", age);

console.log("Student:", isStudent);

console.log("JobHolder:", isJobHolder);

console.log("Skills:", skills);

console.log("Address:", address.city + ", " + address.country);

console.log("Experience:", experience);

console.log("Future Plan:", futurePlan);



// Operators

let totalBill = 1500;

let numberOfPeople = 2; 

let myWallet = 800; 

let myShare = totalBill / numberOfPeople;  

let canPay = myWallet >= myShare;  

console.log("Total Bill:", totalBill);

console.log("My Share:", myShare);



//If else statement 


let billAmount = 2500;  

if (billAmount >= 5000) {
    console.log("You get a 20% discount!");
} else if (billAmount >= 3000) {
    console.log("You get a 10% discount!");
} else if (billAmount >= 1000) {
    console.log("You get a 5% discount!");
} else {
    console.log("No discount available.");
}





// Switch Statements 


let signal = "yellow";  

switch (signal) {
    case "red":
        console.log("Stop! The light is red.");
        break;
    case "yellow":
        console.log("Slow down! The light is yellow.");
        break;
    case "green":
        console.log("Go! The light is green.");
        break;
    default:
        console.log("Invalid signal.");
}


// While loop 

let seconds = 5;

while (seconds > 0) {
    console.log("Tea will be ready in:", seconds, "seconds");
    seconds--;
}

console.log("Tea is ready!");



// Do while loop


// let correctPassword = "1234";
// let userPassword;

// do {
//     userPassword = prompt("Enter your password:"); 

// } while (userPassword !== correctPassword);

// console.log("Access granted!");


// Functions 


function calculateBill(amount, taxRate) {
    let tax = amount * (taxRate / 100);
    let total = amount + tax;
    return total;
}

let billTotalAmount = 2000;
let taxPercentage = 5;
let finalAmount = calculateBill(billTotalAmount, taxPercentage);

console.log("Total Bill (with tax):", finalAmount);

// Arrow functions 


const checkEligibility = (age) => {
    return age >= 18 ? "You are eligible for a driving license." : "You are not eligible.";
};

let myAge = 20;
console.log(checkEligibility(myAge));