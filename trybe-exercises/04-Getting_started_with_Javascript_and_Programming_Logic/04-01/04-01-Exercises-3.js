/*
Make a program that returns the biggest of three numbers.
Define at the beginning of the program three constants with
the values that will be compared.
*/
const num1 = 12;
const num2 = 13;
const num3 = 14;
//Using switch
switch (true) {
    case (num1 > num2 && num2 > num3):
        console.log(num1 + ' is the biggest number.');
        break;
    case (num1 < num2 && num2 > num3):
        console.log(num2 + ' is the biggest number.');
        break;
    case (num1 < num2 && num2 < num3):
        console.log(num3 + ' is the biggest number.');
        break;
    case (num1 === num2 && num2 > num3):
        console.log(num1 + ' is the biggest number.');
        break;
    case (num1 === num2 && num2 < num3):
        console.log(num3 + ' is the biggest number.');
        break;
    case (num1 === num3 && num3 > num2):
        console.log(num1 + ' is the biggest number.');
        break;
    case (num1 === num3 && num3 < num2):
        console.log(num1 + ' is the biggest number.');
        break;
    case (num2 === num3 && num3 > num1):
        console.log(num2 + ' is the biggest number.');
        break;
    case (num2 === num3 && num3 < num1):
        console.log(num1 + ' is the biggest number.');
        break;
    case (num1 === num2 && num2 == num3):
        console.log("They are equal");
        break;
    default:
        console.log("Invalid number");
        break;
}
