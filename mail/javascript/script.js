// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato
alert('Benvenuto nel nostro portale!');
var userMail = prompt('Qual è il suo indirizzo mail?');
console.log(userMail);

var mailList = ['pincopallo@yahoo.it', 'cicciopasticcio@gmail.com', 'pippo@hotmail.it', 'robocop@outlook.com', 'gertude93@live.it', 'mattiapedone93@gmail.com', 'wlf@gmail.com', 'pasqualino@live.com'];

var mailPresente = false;

for (var i = 0; i < mailList.length; i++) {
  var mailCorrente = mailList[i];
  if (userMail == mailCorrente) {
    mailPresente = true;
  }
}

if (mailPresente == true) {
  alert('Complimenti! Ora potrai accedere a migliai di contenuti disponibili!');
} else {
  alert('Siamo spiacenti, ma per poter accedere ai nostri contenuti dovrai prima effettuare la registrazione al nostro portale!');
}
