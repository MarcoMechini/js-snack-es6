
/**
 * Prende come parametri 2 variabili una con il massimo ed una con il minimo
 * cicla l'array passato come parametro e fa push in un altro array solo se il numero corrente è maggione del minimo e se è minore del massimo
 * e ritorna un array con questo intervallo di numeri
 *
 * @param {number} a
 * @param {number} b
 * @param {Array} array
 * @returns {Array}
 */
const getInterval = (a, b, array) => {
    const arrInterval = [];
    for (let i = 0; i < array.length; i++) {
        const curNumber = array[i];

        if (curNumber >= a && curNumber <= b) {
            arrInterval.push(curNumber);
        }
    }
    return arrInterval;
}

const numArray = [1, 5, 6, 9, 3, 4, 11, 13, 19, 33];
const a = 3;
const b = 19;

console.log(getInterval(a, b, numArray));

