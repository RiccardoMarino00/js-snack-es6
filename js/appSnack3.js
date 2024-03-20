// Creare un array di oggetti, Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
const bike = [

    {
        nome: "Emonda SL 5 Disc",
        peso: "9,15 kg"
    }, 

    {
        nome: "Emonda SLR 7 Disc eTap",
        peso: "7,33 kg"
    },

    {
        nome: "Emonda SLR 6 Disc",
        peso: "7,26 kg"
    },

    {
        nome: "Emonda SL 7 Disc eTap",
        peso: "7,95 kg"
    },

    {
        nome: "Emonda SL 7 Disc",
        peso: "7,74 kg"
    },

    {
        nome: "Emonda SL 6 Disc Pro",
        peso: "8,03 kg"
    },

    {
        nome: "Emonda SLR 9 Disc eTap",
        peso: "6,74 kg"
    },

    {
        nome: "Emonda SLR 9 Disc ",
        peso: "6,72 kg"
    },

    {
        nome: "Emonda SL 6 Disc ",
        peso: "8,25 kg"
    },

    {
        nome: "Emonda SLR 7 Disc",
        peso: "7,18 kg"
    },
];


// Stampare in console la bici con peso minore utilizzando destructuring e template literal
  let lightWeight = bike[0].peso;
  let nameOfLightWeight = bike[0].nome;
  for (let i = 1; i < bike.length; i++) {
    if (bike[i].peso < lightWeight) {
      lightWeight = bike[i];
      nameOfLightWeight = bike[i]
    }
  }

  const {nome, peso} = lightWeight; // ?????
  console.log(`La bici con il peso minore è  ${nome}  con un peso di ${peso}` )

