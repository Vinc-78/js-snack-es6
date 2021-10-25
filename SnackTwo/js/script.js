/*Creare un array di oggetti di squadre di calcio. 
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà:Punti fatti e falli subiti.

Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono 
solo nomi e falli subiti e stampiamo tutto in console.*/



let teams = [
    {team: 'Napoli', punti: 0, falli: 0},
    {team: 'Milan', punti: 0, falli: 0},
    {team: 'Fiorentina', punti: 0, falli: 0},
    {team: 'Roma', punti: 0, falli: 0},
    {team: 'Cagliari', punti: 0, falli: 0},
    
]

// Generare numeri random al posto degli 0 nelle proprietà:


for(let i = 0; i < teams.length; i++){

    //assegna alla proprietà punti dell'arrei di oggetti team random
    teams[i].punti = numeriRandom(1,100);
    // idem per i falli 
    teams[i].falli = numeriRandom(5,25);
}
console.log(teams);

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. 

let newTeams = [];
for(let i = 0; i < teams.length; i++){
    // prende gli elementi di team, ma solo team e falli
    const {team, falli} = teams[i];
    //li aggiunge a new Team
    newTeams.push({team, falli}); 
}
console.log(newTeams)




function numeriRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
