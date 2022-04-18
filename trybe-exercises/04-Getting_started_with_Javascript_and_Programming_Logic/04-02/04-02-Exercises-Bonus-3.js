/*
Bubble Sorts
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newArray = [];
for (let index = 0; index < numbers.length; index  += 1) {
    let newNumber = numbers[index] *  numbers[index + 1]; {
        if (isNaN(newNumber)) {
            newNumber = numbers[index] * 2
            newArray.push(newNumber);         
        }else {
            newArray.push(newNumber);  
        }        
    }    
}

console.log(newArray);   
