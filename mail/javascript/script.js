// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato
alert('Benvenuto nel nostro portale!');
var userMail = prompt('Qual è il suo indirizzo mail?');
console.log(userMail);

var mailList = ['pincopallo@yahoo.it', 'cicciopasticcio@gmail.com', 'pippo@hotmail.it', 'robocop@outlook.com', 'gertude93@live.it', 'mattiapedone93@gmail.com', 'wlf@gmail.com', 'pasqualino@live.com'];

for (var i = 0; i < mailList.length; i++) {
  if (userMail == mailList) {
    alert('Ora potrai accedere a migliaia dei nostri contenuti');
  } else {
    alert('Siamo spiacenti, ma per accedere ai contenuti dovrai effettuare la registrazione al nostro portale!');
  }
}
