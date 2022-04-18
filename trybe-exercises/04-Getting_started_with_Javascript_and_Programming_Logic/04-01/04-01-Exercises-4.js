/*
Make a program that, given a value set in a constant,
returns "positive" if that value is positive, "negative"
if it is negative, and "zero" otherwise.
*/
const numberToCheck = "a";
//Using If
if (isNaN(numberToCheck) == true) {
    console.log("It's not a number.");
}else{
    if (numberToCheck < 0) {
        console.log(numberToCheck+ ' is a negative number.');
    }
    else if (numberToCheck > 0) {
        console.log(numberToCheck+ ' is a positive number.');
    }else{
        console.log("Zero?!");
    }
}
//Using Switch
switch (true) {
    case (numberToCheck < 0):
        console.log(numberToCheck+ ' is a negative number.');
        break;
    case (numberToCheck > 0):
        console.log(numberToCheck+ ' is a positive number.');
        break;
    case (numberToCheck == 0):
        console.log("Zero?!");
        break;
    default:
        console.log("It's not a number.")
        break;
}
