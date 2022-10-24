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

function misuraZucchine() {
    arrayZucchine.forEach(element => {
        let lunghezzaZucchina = Number(element.lunghezza)
        console.log(lunghezzaZucchina);
        if (lunghezzaZucchina >= 15) {
            zucchineGrandi.push(element)
        } else {
            zucchinePiccine.push(element)
        }
    });
}

//console.log("piccole:", zucchinePiccine);
//console.log("grandi:", zucchineGrandi);