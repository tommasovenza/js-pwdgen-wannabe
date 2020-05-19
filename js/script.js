var nomeUtente = prompt('Qual è il tuo nome?');
console.log(nomeUtente);

var cognomeUtente = prompt('Qual è il tuo cognome?');
console.log(cognomeUtente);

var colorePreferito = prompt('Qual è il tuo colore preferito?');
console.log(colorePreferito);

var password = nomeUtente + cognomeUtente + colorePreferito + '19';
console.log(password);

document.getElementById('testo-modificato').innerHTML = password;
