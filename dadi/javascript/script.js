// Gioco dei dadi, chi fa di più vince
alert('Benvenuto! Lancia i dadi e scopri se hai vinto un fantastico premio!');

var userPick = parseInt(prompt('Inserisci un numero tra 1 e 6'));
var cpuPick = Math.floor(Math.random() * 6) + 1;

if (userPick > cpuPick) {
  alert('Hai Vinto!');
} else if (userPick < cpuPick) {
  alert('Hai Perso');
} else if (userPick == cpuPick) {
  alert('Hai Pareggiato');
}
