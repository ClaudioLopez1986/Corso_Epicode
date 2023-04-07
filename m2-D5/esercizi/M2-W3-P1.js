/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*
function area(l1, l2) {
  return l1 * l2;
}

console.log(area(5, 3));
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* 
function crazySum(a, b) {
  if (a === b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
}
console.log(crazySum(5, 4));
console.log(crazySum(3, 3));
 */




/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/


/* 
function crazyDiff(num) {
  let diff = Math.abs(num - 19);
  if (diff > 19) {
    diff *= 3;
  }
  return diff;
}

console.log(crazyDiff(9));
console.log(crazyDiff(20));
*/




/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/*  
function boundary(num) {
  if (num >= 20 && num <= 100 || num === 400) {
  return true;
  } else {
  return false;
  }
}

console.log(boundary(5));
console.log(boundary(25));
console.log(boundary(400));
*/




/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/*
function codify(stringa) {
  if (stringa.slice(0, 4) === 'code') {
    return stringa;
  } else {
    return 'code' + stringa;
  }
}

console.log(codify("diAnimali"));
console.log(codify("coderman"));
console.log(codify("code perfect!"));
*/




/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* 

function check3and7(num) {
  if (num % 3 === 0 || num % 7 === 0 ) {
    return true;
  } else { 
    return false;
  }
}

console.log(check3and7(9));
console.log(check3and7(49));
console.log(check3and7(25));

 */

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*
function reverseString(stringa) {
  return stringa.split("").reverse().join("");
}

console.log(reverseString("claudio"));
*/

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */




/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/*
function cutString(stringa) {
  return stringa.slice(1, -1);
}

console.log(cutSting(Buongiorno))
*/

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/*
function giveMeRandom(n) {
var arr = [];
for(var i=0; i<n; i++) {
arr.push(Math.floor(Math.random() * 11));
}
return arr;
}

console.log(giveMeRandom())

*/