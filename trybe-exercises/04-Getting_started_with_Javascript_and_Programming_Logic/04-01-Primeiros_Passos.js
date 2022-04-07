const myName = "Alecsandro"; //string literal - primitive
const birthCity = "Recife"; //string literal - primitive
let birthYear = 1976; //number literal - primitive
let isValid = true; //boolean - primitive
let name; //undefined - primitive
let color = null; //null type - primitive

//printing the results
console.log(myName);
console.log(birthCity);
console.log(birthYear);

//Trying to change the values
birthYear = 1977;

//birthCity = "Salvador"; Error! You can't change the value of a const.
console.log(birthCity);
console.log(birthYear);

//JS is Dynamic!
console.log(typeof(isValid));
isValid = 0;
console.log(typeof(isValid));

/*
Operators
x = y   -> 	x = y
x += y  ->	x = x + y
x -= y  ->	x = x - y
x *= y  ->	x = x * y
x /= y	->  x = x / y
x %= y	->  x = x % y
x **= y ->	x = x ** y
*/
