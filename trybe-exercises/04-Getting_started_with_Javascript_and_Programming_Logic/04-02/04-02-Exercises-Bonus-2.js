/*
Bubble Sorts
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index  += 1) {
    for (let index2 = 0; index2 < numbers.length; index2  += 1) {
        if (numbers[index] > numbers[index2]) {
            let newPosition = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = newPosition;
        }  
    
    }      
}

console.log(numbers);
