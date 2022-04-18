// && - AND
const currentHour = 5;
let message = "";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
}
else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
}
else if (currentHour < 18 && currentHour >= 14) {
    message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour < 14 && currentHour >= 11) {
    message = "Hora do almoço!!!";
}
else {
    message = "Hmmm, cheiro de café recém passado";
}
console.log(message);

// ||- OR
let weekDay = "quarta-feira";

if (weekDay == "sábado" || weekDay == "domingo") {
    console.log("FINALMENTE, descanso merecido UwU");
}
else {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
// ! - NOT

console.log(!null); // true
console.log(!(2 + 2) === 4);
console.log(!42); // false
console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.
console.log(!null); // true
