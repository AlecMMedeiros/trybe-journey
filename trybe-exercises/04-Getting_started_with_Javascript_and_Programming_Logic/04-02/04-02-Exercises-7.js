/*
Using for , find out what is the smallest value
contained in the array and print it;
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Using traditional For loop:
function smallNumber1(arr) {
    let smallest = 0;
    for (let index = 0; index <arr.length; index += 1) {
        for (let index2 = 0; index2 <arr.length; index2 += 1) {
            if (arr[index] > arr[index2]) {
                smallest = arr[index2];
            }
        }
    }
    return smallest;
}
//Using For/of:
function smallNumber2(arr) {
    let smallest = 0;
    for (value of arr) {
        for (value2 of arr) {
            if (value > value2) {
                smallest = value2;
            }
        }
    }
    return smallest;
}
console.log(smallNumber1(numbers));
console.log(smallNumber2(numbers));
