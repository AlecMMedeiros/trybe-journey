//Biggest prime number
let number = 6;
let bigPrime = 0;
let text = ""
while (number > 0) {
    let result = [];
    while (number > 0) {
        if (number === number) {
            result.push(number);
            number -= 1;
        }
    }
    for (value in result) {
        if (value != 1 && value != number && number % value === 0) {
            text = "É primo";
        }
        else{
            text = "Não é primo";
        }            

    }
}
//     return result;
// }
// if (number / 1 === number && number % 2 === 1 && number > bigPrime) {
//     bigPrime = number;
//     number -= 1;
// } else {
//     number -= 1;
// }   
// }
console.log(text);