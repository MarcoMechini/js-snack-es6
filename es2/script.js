const team = [
    {
        nome: 'Parma',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Venezia',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Frosinone',
        puntiFatti: 0,
        falliSubiti: 0
    }
];

const newArray = [];

const getRand = () => Math.floor(Math.random() * 10 + 1);


for (let i = 0; i < team.length; i++) {

    const curTeam = team[i];
    const curTeamName = curTeam.nome;
    const curTeamPenal = getRand();
    const curTeamPoint = getRand();

    //Invece di assegnare il valore facevo push del risultato e incremendando l'array mi diventava un loop infinito
    team[i].puntiFatti = curTeamPoint;
    team[i].falliSubiti = curTeamPenal;

    newArray.push({ nome: curTeamName, falliSubiti: curTeamPenal });
}
console.log(team);
console.log(newArray);

