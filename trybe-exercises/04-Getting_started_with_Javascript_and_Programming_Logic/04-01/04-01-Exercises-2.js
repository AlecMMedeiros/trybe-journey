/*
Make a program that returns the biggest of two numbers.
Define at the beginning of the program two constants with the values that will be compared.
*/
const num1 = "a";
const num2 = 12;

if (typeof num1 === "number" && typeof num2 === "number") {
    if (num1 > num2) {
        console.log(num1 + ' is bigger than ' + num2);
    } else if (num1 < num2) {
        console.log(num2 + ' is bigger tha ' + num1);
    } else {
        console.log("Equal numbers");
    }
} else {
    console.log("Invalid input")
}
