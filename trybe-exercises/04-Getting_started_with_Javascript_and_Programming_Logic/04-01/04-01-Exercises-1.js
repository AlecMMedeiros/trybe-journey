/*
Make five programs, one for each basic arithmetic operation.
Your program should have two constants, a and b, defined at the
beginning with the values that will be operated on. 
*/
const a = 2;
const b = 1;
const operation = "sum";

if (typeof a === "number" && typeof b === "number") {
    switch (operation) {
        case "sum":
            console.log(a + b);
            break;
        case "subtraction":
            console.log(a - b);
            break;
        case "multiplication":
            console.log(a * b);
            break;
        case "division":
            console.log(a / b);
            break;
        case "module":
            console.log(a % b);
            break;
        default:
            console.log("Invalid operation")
            break;
    }
} else {
    console.log('Invalid number')
}
