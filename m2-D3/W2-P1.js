/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* 
let number_one = 5;
let number_two = 13;

if (number_one > number_two) {
  console.log(number_one)
} else {
  console.log(number_two)
}
*/


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*
let numeroFornito = 7

if (numeroFornito ===5) {
  console.log("il numero è uguale a 5")
}  else{
  console.log("not equal")

}

*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* 
let num = 35;

if (num % 5 === 0) {
   console.log ("divisible by 5");
} else {
   console.log ("not divisible by 5")



*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* 
let num1 = 16;
let num2 = 8;

if (num2 === 8 || num1 === 8 || num1 + num2 === 8 || num1-num2 === 8 || num2-num1===8) {
   console.log ("one of two conditions is true");
} else {
   console.log ("none of two conditions is true");
}


*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* 
let totalShoppingCart = 50;
let shippingCost = 10;
let finalTotal;

if (totalShoppingCart <= 50) {
   finalTotal = totalShoppingCart + shippingCost;
} else {
  finalTotal = totalShoppingCart;
}
console.log ('You have to pay ' + finalTotal + ',00$');

*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* 
let totalShoppingCart = 60;
let shippingCost = 10;
let finalTotal;
let discountBlackFriday = 0.8;
let blackFridayAlert = " Hey it's Black Friday! A 20% coupon has been applied to your shopping cart!"
let noChargesAlert = " Your shipping charges have been cancelled since your order is greater than 50,00$"

if (totalShoppingCart <= 50) {
   finalTotal = ((totalShoppingCart * discountBlackFriday) + shippingCost).toFixed(0);
   console.log ("Your total is " + finalTotal + ",00$." + blackFridayAlert);

} else {
   finalTotal = (totalShoppingCart * discountBlackFriday).toFixed(0);
   console.log ("Your total is " + finalTotal + ",00$." + blackFridayAlert + noChargesAlert);
}

*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* 
let num1 = 150;
let num2 = 100;
let num3 = 500;
let min, mid, max;

if (num1 > num2 && num1 > num3) {
   max = num1;
   if (num2 > num3) {
     mid = num2;
     min = num3;
  } else {
    mid = num3;
    min = num2;
  }
} else if (num2 > num1 && num2 > num3) {
   max = num2;
  if (num1 > num3) {
     mid = num1;
     min = num3;
  } else {
     mid = num3;
     min = num1;
  }
  } else {
   max = num3;
   if (num2 > num1){
     mid = num2;
     min = num1;
  } else{
    mid = num1;
    min = num2;
   }
}
// console.log(max, mid, min);

*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/*
let val = 7;

if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
}


*/

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* 
let num = 9.8;

if (num < 5) {
  console.log("Tiny"); //output: num = tra 0.1 e 4.9
} else if (num < 10) {
  console.log("Small"); //output: num = tra 5 e 9.9
} else if (num < 15) {
 console.log ("Medium"); //output: num = tra 10 e 14.9
} else if (num < 20) {
  console.log ("Large"); //output: num = tra 15 e 19.9
} else if (num >= 20) {
  console.log("Huge"); //output: num = 20 o +
}


*/

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* 
let isMale;
let gender = "male";

if (gender === "male"){
  isMale = true;
} else {
 isMale = false;
}
 console.log (isMale);

*/

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* 
let n = 0;

while (n < 6) {
   console.log (n);
 n++;
}

*/

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* 
for (let n = 0; n < 11; n++) {
   console.log (n);
}
*/

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* 
let day = 5; //output = "Tuesday"

switch (day) {
   case 1 :
    day = "Monday"
    break;
  
  case 2 :
     day = "Tuesday"
     break;

  case 3 :
     day = "Wednesday"
     break;

  case 4 :
     day = "Thursday"
     break;

  case 5 :
     day = "Friday"
     break;

  case 6 :
     day = "Saturday"
     break;

  case 7 :
     day = "Sunday"
     break;
}
// console.log(day);

*/
