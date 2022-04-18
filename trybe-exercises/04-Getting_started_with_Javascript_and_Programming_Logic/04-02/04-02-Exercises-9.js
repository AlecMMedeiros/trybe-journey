/*
Using the array created in the previous exercise print out
the result of dividing each of the elements by 2 .
*/
let maxNumber = 25;
function listOfnumbers(maxNumber) {
    let resultList = [];
    for( let number = 1; number < (maxNumber + 1); number += 1) {
        resultList.push(number)
    }
    return resultList;
}

let teste = listOfnumbers(25);

function dividedBytwo (resultList) {
    for (value of resultList) {
        console.log(value/2)
    }
}

dividedBytwo(teste);
