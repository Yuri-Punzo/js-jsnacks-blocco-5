/* Bonus:
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona,
una frase con il nome,cognome e l’indicazione se può guidare, in base all’età. */

const peopleArray = [
    {
        nome: "Paolo",
        cognome: "Forte",
        eta: "16",
    },
    {
        nome: "Mirko",
        cognome: "Gallini",
        eta: "36",
    },
    {
        nome: "Franco",
        cognome: "Sforzi",
        eta: "21",
    },
    {
        nome: "Gianluca",
        cognome: "Paglierini",
        eta: "19",
    },
    {
        nome: "Carlo",
        cognome: "Brembi",
        eta: "17",
    },
]

let newArray = []

peopleArray.forEach(element => {
    if (element.eta > 18) {
        newArray.push(`${element.nome} ${element.cognome}, etò: ${element.eta}. Può guidare`)
    } else {
        newArray.push(`${element.nome} ${element.cognome}, etò: ${element.eta}. Non può guidare`)
    }
    //console.log(element.nome);
});

console.log(newArray);