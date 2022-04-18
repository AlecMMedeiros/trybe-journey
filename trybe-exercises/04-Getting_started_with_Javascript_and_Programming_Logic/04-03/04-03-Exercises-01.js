//Factorial
let number = 4;

function factorialCalc(number) {
   let result = 1;   
   while (number > 0) {
      if (number === number) {
         result = number * result;
         number -= 1;
      }
   }
   return result;
}

console.log(factorialCalc(number));
