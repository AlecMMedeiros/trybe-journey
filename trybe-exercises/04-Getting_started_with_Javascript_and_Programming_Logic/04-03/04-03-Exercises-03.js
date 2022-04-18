// Words length comparation

let array = ['java', 'javascript', 'python', 'html', 'css'];

function biggestWord(array) {
    bWord = '';
    for (let index = 0; index < array.length; index += 1) {
        for (let index2 = 0; index2 < array.length; index2 += 1) {
            if (array[index].length > array[index2].length && array[index].length > bWord.length) {
                bWord = array[index];
            }
        }
    }
    return bWord;
}

function smallestWord(array) {
    sWord = '';
    for (let index = 0; index < array.length; index += 1) {
        for (let index2 = 0; index2 < array.length; index2 += 1) {
            if (array[index].length < array[index2].length && array[index].length < bWord.length) {
                sWord = array[index];
            }
        }
    }
    return sWord;
}


console.log(biggestWord(array));
console.log(smallestWord(array));