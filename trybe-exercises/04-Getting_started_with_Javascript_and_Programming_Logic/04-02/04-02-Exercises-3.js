/*
For the third exercise, calculate and print the
arithmetic mean of the values contained in the array;
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Using For/of in a function:
function calcMean(arr) {
    let result = 0;
    for (value of arr) {
        result = result + value;
    }
    let meanArray = result / arr.length;
    return meanArray;
}
//Using traditional For loop:
function calcMean2(arr) {
    let result = 0;
    for (let index = 0; index < arr.length; index += 1) {
        result = result + arr[index];
    }
    let meanArray = result / arr.length;
    return meanArray;
}

console.log(calcMean(numbers))
console.log(calcMean2(numbers))
