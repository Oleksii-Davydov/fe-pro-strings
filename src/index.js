/**
 * Мы передаем строку и должны заменить любую z или v вне зависимости от регистра
 * на символ звездочки *
 * @param {string} string
 * @returns {string}
 */

export const replaceZAndVFromString = (string) => {
    let result = '';
    for (let letter of string) {
if (letter.toLowerCase() === 'z' || letter.toLowerCase() === 'v' ) {
    letter = '*';
}
result = `${result}${letter}`
    }
    return result;
    //return string.replaceAll('Z', '*')
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

export const changeWord = (string, word, newWord) => {
    return string.replace(word, newWord)
};

/**
 * Должна вернуть строку(1 аргумент) на обрезанную по длине(2 аргумент, число)
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */

export const truncate = (string, length) => {
    return string.slice(0, length)
};

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

export const quantityOfSymbols = (string, symbol) => {
    let stringToLowCase = string.toLowerCase();
    let symbolToLowCase = symbol.toLowerCase();
    let result = 0;
    for (let i = 0; i <= stringToLowCase.length; i++) {
        if (stringToLowCase[i] === symbolToLowCase) {
            result++;
        }
    }
    return result
};


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

export const quantityOfSymbolsWithIndexOf = (string, symbol) => {
    let index = -1;
    let count = 0;
    string = string.toLowerCase().split('');
    symbol = symbol.toLowerCase();
    while (true) {
        index = string.indexOf(symbol, index + 1);
        if (index !== -1) {
            count++;
        } else {
            break;
        }
    }
    return count;
};


