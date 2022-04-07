//Write a program that sets three numbers into
//constants and returns true if at least one of
//the three is even. Otherwise, it returns false.
//Bonus: Use just one "if".
const num1 = 1;
const num2 = 1;
const num3 = 1;
let checkNum = ((num1 % 2) * (num2 % 2) * ( num3 % 2)); // created to solution 2
//Using one If - Solution 1
if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    console.log(true)
}else{
    console.log(false)
}
//Using one If - Solution 2
if (true) {
    console.log(checkNum % 2 == 0)
}