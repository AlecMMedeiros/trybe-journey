// Word inverter
let word = 'tryber';

function wordInverter(word){
    let invetedWord = ''
    for (index = word.length - 1; index >= 0; index -= 1){
        invetedWord = invetedWord + word[index];
    }
    return invetedWord;
}

console.log(wordInverter(word));