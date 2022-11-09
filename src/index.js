/**
 * Мы передаем строку и должны заменить любую z или v вне зависимости от регистра
 * на символ звездочки *
 * @param {string} string
 * @returns {string}
 */
let string = 'Z And V'
export const replaceZAndVFromString = (string) => {
    console.log(string.replace(string,  '* And *'))
};
// Должно вернуть 'my name vlad and I'
// Работаем по первому совпадению, на второе нам все равно. Если совпадений нет, возвращаем оригинальную строку с первого аргумента
/**
 * Функция должна принять 3 аргумента и все строки. Мы передаем строку,
 * вторая строка это искомое слово, третья это то слово, на которое мы должны
 * заменить. Смотрите использование в файле check.js рядом. Должно вернуть строку
 * 1 аргумента с замененным словом(2 аргумент) на слово(3 аргумент)
 * @param {string} string
 * @param {string} word
 * @param {string} newWord
 * @returns {string}
 */
let stringA = 'my name bohdan and I'
let word = 'bohdan'
let newWord = 'vlad'
export const changeWord = (stringA, word, newWord) => {console.log(stringA.replace(word,newWord))};

/**
 * Должна вернуть строку(1 аргумент) на обрезанную по длине(2 аргумент, число)
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */

let stringB = 'test strubg '
let lengthB = 3
export const truncate = (stringB, lengthB) => {console.log(stringB.slice(stringB,3))};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать просто через цикл for и с проверкой
 * посимвольно. Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
let stringD = 'test'
let symbolD = 't'
export const quantityOfSymbols = (string, symbol) => {console.log(stringD.toLowerCase().split(symbolD.toLowerCase()).length-1)};


/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать через метод indexOf. Напомню, в
 * нем есть второй аргумент, который говорит, от какой позиции
 * делать поиск. Я хочу, чтобы вы сделали бесконечный цикл
 * while и искали символы этим методом, и сделали break когда позиций
 * больше нет. Так будет более оптимально, меньше проходов цикла.
 * Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
let count = 0;
let stringW = 'Test';
let symbolW = 't';

export const quantityOfSymbolsWithIndexOf = (stringW, symbolW) => {
    let index = -1;
    stringW = stringW.toLowerCase().split('');
    symbolW = symbolW.toLowerCase();
    while (true) {
        index = stringW.indexOf(symbolW, index + 1);
        if (index !== -1) {
            count++;
        }
        else {
            break;
        }
    }

    console.log(count);
};

//quantityOfSymbolsWithIndexOf(stringW, symbolW);
// let stringW = 'test';
// let symbolW = 't';
// export const quantityOfSymbolsWithIndexOf = (string, symbol) => {
//     let indices = 0
//     let idx = string.indexOf(symbol)
//     while (idx != -1) {
//         indices ++
//         idx = string.toLowerCase().indexOf(symbol.toLowerCase(), idx + 1);
//     }
//     return indices
// };
//
// console.log(quantityOfSymbolsWithIndexOf(stringW, symbolW))
