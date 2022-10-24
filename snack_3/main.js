/* Snack 3:
Scrivi una funzione che accetti una stringa come argomento e la ritorni
girata (es. Ciao -> oaiC) */

//versione con ciclo for
function wordReverser(text) {
    let reversedWord = "" // creo una costante vuota che poi diventerà la parola immessa scritta al contrario

    for (let i = text.length; i > 0; i--) { // inizio il ciclo dall'ultima lettera per poi scorrere a ritroso
        let char = text.charAt(i - 1); // si mette i-1 perché i parte a contare da 0, length invece parte da 1 !
        //console.log(char);
        reversedWord += char // rimonto la parola al contrario lettera per lettera
    }
    return reversedWord
}


console.log(wordReverser("Memento"));

//versione con split/reverse/join method
function wordReverser2(text) {
    const splitted = text.split("")
    const reversed = splitted.reverse()
    const jointed = reversed.join("")
    return jointed
}

console.log("2nd function:", wordReverser2("otnemeM"));