/* Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando
per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

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


//versione con ciclo FOR
function pesatoreDiZucchine() {
    let pesoTotale = 0
    for (let i = 0; i < arrayZucchine.length; i++) {
    const zucchina = arrayZucchine[i]
    //console.log(Number(zucchina.peso));
    let pesoZucchina = Number(zucchina.peso)
    pesoTotale += pesoZucchina
}
return pesoTotale
}

console.log(pesatoreDiZucchine());

//versione con ciclo FOR EACH
let pesoTotale = 0
arrayZucchine.forEach(element => {
    let pesoZucchina = Number(element.peso)
    //console.log(pesoZucchina);
    pesoTotale += pesoZucchina
    return pesoTotale
});

console.log(pesoTotale);




