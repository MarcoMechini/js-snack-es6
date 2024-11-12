const bici = [
    {
        nome: 'bmx',
        peso: 40
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

let lightBike = 100000;

for (let i = 0; i < bici.length; i++) {
    const curBici = bici[i];

    const curBiciName = curBici.nome;
    const curBiciWeigth = curBici.peso;

    if (lightBike > curBiciWeigth) {
        lightBike = curBiciWeigth;

        console.log(`La bici più leggera è: ${curBiciName}, peso: ${curBiciWeigth}`);
    }

}

