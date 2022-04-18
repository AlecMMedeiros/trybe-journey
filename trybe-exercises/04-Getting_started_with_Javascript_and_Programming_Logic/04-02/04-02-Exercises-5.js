/*
Using for , find out which is the greatest
value contained in the array and print it;
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Using traditional For loop:
function greatestNumber (arr) {
    let greatest = 0;
    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] > greatest) {
            greatest = numbers[index];
        }
    }
    return greatest;
}
//Using For/of:
function greatestNumber2 (arr) {
    let greatest = 0;   
    for ( value of arr) {         
        if (value > greatest) {
            greatest = value;
        }        
    }
    return greatest;
}

console.log(greatestNumber(numbers));
console.log(greatestNumber2(numbers));
