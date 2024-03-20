// Creare un array di oggetti di squadre di calcio.  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const footballTeam = [
    {
        nome: "Roma",
        punti: 0,
        falli: 0,
    },

    {
        nome: "Cosenza",
        punti: 0,
        falli: 0,
    },

    {
        nome: "Milan",
        punti: 0,
        falli: 0,
    },

    {
        nome: "Fiorentina",
        punti: 0,
        falli: 0,
    },

    {
        nome: "Monza",
        punti: 0,
        falli: 0,
    },
]


// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
for (let i = 0; i < footballTeam.length; i++){
    currentTeam = footballTeam[i]
    if (currentTeam.punti === 0 && currentTeam.falli === 0){
        currentTeam.punti = getRandomInt(0, 114);
        currentTeam.falli = getRandomInt(0, 90)
    }
    // console.log(currentTeam.punti, currentTeam.falli)
}

console.log(footballTeam)

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const puntiFalliTeam = footballTeam.map((footballTeam) => {
    const {punti, falli} = footballTeam
    return punti, falli    
})
console.log(puntiFalliTeam)




function getRandomInt(min, max) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min
    return random
  }

  
  