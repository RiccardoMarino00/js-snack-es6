const tavoloVip = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

// Creo funzione per generare invitati
function guestGenerator (nomeTavolo, nomeOspite, posto) {
    const guest = {
     tableName: nomeTavolo, //String
     guestName: nomeOspite, //String
     seat: posto //String
    }
    return guest
 }


 for (let i = 0; i < tavoloVip.length; i++){
    currentEl = tavoloVip[i];
    const guest = guestGenerator("Tavolo VIP", tavoloVip[i], i + 1)
    console.log(guest)
 }














