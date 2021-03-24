// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘bianchi’, ‘neri’, ‘rossi’, ‘verdi’, ‘gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana", 1 oppure 2 oppure 3 oppure ecc... (non 0 oppure 1 oppure 2 oppure ecc.. tipici degli array), del nuovo utente inserito sopra all'interno dell'array, dopo l'ordinamento alfabetico


// var userName = parseInt ( prompt("Inserisci nome") );

// var lista = ["bianchi", "neri", "rossi", "verdi", "gialli"];
// console.log(lista);


// for (var i = 0; i < lista.length; i++){
//     lista.push('marroni');
//     break;
// }
// console.log(lista[i]);





//l'utente inserisce due numeri e ne calcoli la somma

//INFORMAZIONE CHIESTA ALL'UTENTE
var utente = parseInt (prompt("inserisci un numero"));
var utente2 = parseInt (prompt("inserisci un altro numero"));

//VARIANTE CHE SOMMIAMO CON I NUMERI DATI DALL'UTENTE
var somma = 4;

//RISULTATO
var risultato = somma + utente + utente2;
console.log(risultato);


//partendo da un'array di 10 numeri stampali moltiplicandoli per 2

var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeri);

var moltiplicatore = 2;

var risultato = numeri * moltiplicatore;
console.log(risultato);
