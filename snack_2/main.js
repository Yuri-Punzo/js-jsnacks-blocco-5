/* Snack 2:
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

const arrayZucchine = [
    {
        varieta: "zucchino romanesco",
        peso: "120",
        lunghezza: "12",
    },
    {
        varieta: "zucchino fiorentino",
        peso: "80",
        lunghezza: "8",
    },
    {
        varieta: "zucchino napoletano",
        peso: "180",
        lunghezza: "18",
    },
    {
        varieta: "zucchino romanesco",
        peso: "130",
        lunghezza: "13",
    },
    {
        varieta: "zucchino fiorentino",
        peso: "90",
        lunghezza: "9",
    },
    {
        varieta: "zucchino napoletano",
        peso: "110",
        lunghezza: "11",
    },
    {
        varieta: "zucchino fiorentino",
        peso: "170",
        lunghezza: "17",
    },
    {
        varieta: "zucchino romanesco",
        peso: "150",
        lunghezza: "15",
    },
    {
        varieta: "zucchino napoletano",
        peso: "210",
        lunghezza: "21",
    },
    {
        varieta: "zucchino napoletano",
        peso: "140",
        lunghezza: "14",
    }
]

const zucchinePiccine = []
const zucchineGrandi = []


arrayZucchine.forEach(element => {
    let lunghezzaZucchina = Number(element.lunghezza)
    //console.log(lunghezzaZucchina);
    if (lunghezzaZucchina >= 15) {
        zucchineGrandi.push(element)
    } else {
        zucchinePiccine.push(element)
    }
});


console.log("piccole:", zucchinePiccine);
console.log("grandi:", zucchineGrandi);

let pesoTotaleZucchinePiccine = 0
zucchinePiccine.forEach(element => {
    let pesoZucchina = Number(element.peso)
    //console.log(pesoZucchina);
    pesoTotaleZucchinePiccine += pesoZucchina
    return pesoTotaleZucchinePiccine
});
console.log("peso totale piccole:", pesoTotaleZucchinePiccine);

let pesoTotaleZucchineGrandi = 0
zucchineGrandi.forEach(element => {
    let pesoZucchina = Number(element.peso)
    //console.log(pesoZucchina);
    pesoTotaleZucchineGrandi += pesoZucchina
    return pesoTotaleZucchineGrandi
});
console.log("peso totale grandi:", pesoTotaleZucchineGrandi);


//SI POTREBBE ACCORPARE LA PARTE FINALE IN UN UNICA FUNZIONE CHE FACCIA IL PESO E POI USARLA SUI DUE ARRAY...PIù SNELLA ED EFFICACE...

