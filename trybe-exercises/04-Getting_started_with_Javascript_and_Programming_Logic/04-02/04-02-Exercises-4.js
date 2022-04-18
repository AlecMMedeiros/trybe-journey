/*
With the same code as in the previous exercise, if the final value is greater than 20,
print the message: "value greater than 20". If not, print the message: "value less than or equal to 20";
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Using For/of in a function:
function calcMean(arr) {
    let result = 0;
    for (value of arr) {
        result = result + value;
    }
    let meanArray = result / arr.length;
    if ( meanArray > 20) {
        resultText = "Value greater than 20";
    }else{
        resultText = "Value less than or equal to 20";
    }
    return resultText;
}
//Using traditional For loop:
function calcMean2(arr) {
    let result = 0;
    for (let index = 0; index < arr.length; index += 1) {
        result = result + arr[index];
    }
    let meanArray = result / arr.length;
    if ( meanArray > 20) {
        resultText = "Value greater than 20";
    }else{
        resultText = "Value less than or equal to 20";
    }
    return resultText;       
}

console.log(calcMean(numbers))
console.log(calcMean2(numbers))
