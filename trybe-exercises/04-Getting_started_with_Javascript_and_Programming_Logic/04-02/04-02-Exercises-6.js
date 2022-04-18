/*
Find out how many odd values there are in the array and print the result.
If there are none, print the message: "no odd values found";
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Using For/of:
function countOdd (arr) {
    let counter = [];
    for ( value of arr) {
        if ( value % 2 == 1 ) {
            counter.push(value)
        }
    }
    return counter.length;
}
//Using traditional for loop:
function countOdd2 (arr) {
    let counter = [];
    for ( let index = 0; index < arr.length; index += 1) {
        if ( arr[index] % 2 == 1 ) {
            counter.push(arr[index])
        }
    }
    return counter.length;
}

console.log(countOdd(numbers))
console.log(countOdd2(numbers))