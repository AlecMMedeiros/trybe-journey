/*
Using for , create an array
that goes from 1 to 25 and print the result;
*/
let maxNumber = 25;
function listOfnumbers(maxNumber) {
    let resultList = [];
    for( let number = 1; number < (maxNumber + 1); number += 1) {
        resultList.push(number)
    }
    return resultList;
}
console.log(listOfnumbers(maxNumber));
