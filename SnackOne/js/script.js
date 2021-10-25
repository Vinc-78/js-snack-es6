/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal*/

const bici = [
    {
        nome : 'biciOne',
        peso : 36
    },
    {
        nome : 'biciTwo',
        peso : 15
    },
    {
        nome : 'biciThree',
        peso : 8
    },
    {
        nome : 'biciFour',
        peso : 42
    },
    {
        nome : 'biciFive',
        peso : 38
    }
];

console.log(bici);

let biciLeggera = bici[0];

for (let i = 0; i < bici.length - 1; i++){

    if (bici[i].peso < biciLeggera.peso){
        biciLeggera = bici[i];
    }
}

console.log(biciLeggera);

const {nome, peso} = biciLeggera;

console.log(
`La bici con nome ${nome} ha il peso di ${peso}Kg ed è quindi la bici più leggera`
)