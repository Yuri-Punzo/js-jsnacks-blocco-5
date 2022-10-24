/* Snack 4:
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi)
prendendo alternativamente gli elementi da uno e dall’altro.
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

const arrayOfLetters = ["a", "b", "c"]

const arrayOfNumbers = ["1", "2", "3"]

const newArray = []

const maxElementsInArray = 3

arrayMerger()
function arrayMerger() {
    for (i = 0; i < maxElementsInArray; i++) {
        newArray.push(arrayOfLetters[i]);
        newArray.push(arrayOfNumbers[i]);
    }
}

console.log(newArray);