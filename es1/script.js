const bici = [
    {
        nome: 'bmx',
        peso: 4
    },
    {
        nome: 'enduro',
        peso: 200
    },
    {
        nome: 'Bici della Nonna',
        peso: 60
    }
];


let lightBike = bici[0].peso;
let message = '';
for (let i = 0; i < bici.length; i++) {
    const curBici = bici[i];

    const curBiciName = curBici.nome;
    const curBiciWeigth = curBici.peso;

    if (lightBike >= curBiciWeigth) {
        lightBike = curBiciWeigth;
        message = (`La bici più leggera è: ${curBiciName}, peso: ${curBiciWeigth}`);
    }

}

console.log(message);
