const bici = [
    {
        nome: 'bmx',
        peso: 40
    },
    {
        nome: 'enduro',
        peso: 60
    },
    {
        nome: 'Bici della Nonna',
        peso: 200
    }
];

for (let i = 0; i < bici.length; i++) {
    const curBici = bici[i];

    const curBiciName = curBici.nome;
    const curBiciWeigth = curBici.peso;


    console.log(`Nome: ${curBiciName}, peso: ${curBiciWeigth}`);
}

