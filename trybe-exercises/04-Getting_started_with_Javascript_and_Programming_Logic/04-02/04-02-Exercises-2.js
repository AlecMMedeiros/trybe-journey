/*
For the second exercise, sum all the values contained
in the array and print the result;
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Using For/of in a function:
function sumArray(arr) {    
    let result = 0;
    for( value of arr ) {
        result = result + value;
    }
    return result;
}
console.log(sumArray(numbers))
//Using traditional For loop:
function sumArray2(arr) {    
    let result = 0;
    for( let index = 0; index < arr.length; index += 1 ) {
        result = result + arr[index];
    }
    return result;
}
console.log(sumArray2(numbers))
