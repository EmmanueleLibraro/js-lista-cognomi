// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘bianchi’, ‘neri’, ‘rossi’, ‘verdi’, ‘gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana", 1 oppure 2 oppure 3 oppure ecc... (non 0 oppure 1 oppure 2 oppure ecc.. tipici degli array), del nuovo utente inserito sopra all'interno dell'array, dopo l'ordinamento alfabetico


var userName = parseInt ( prompt("Inserisci nome") );

var lista = ["bianchi", "neri", "rossi", "verdi", "gialli"];
console.log(lista);


for (var i = 0; i < lista.length; i++){
    lista.push('marroni');
    break;
}
console.log(lista[i]);