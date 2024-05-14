'use strict';


/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana - con massimo due decimali, per indicare centesimi sul prezzo.
Questo richiederà un minimo di ricerca.
Il risultato andrà visualizzato in un apposito elemento <p> del  codice HTML. */


//--Chiedere con un prompt km da percorrere (e definire variabile)
//--convertire in numeri le stringe
let km = parseInt(Number(prompt('please enter kilometers willing to travel')));
//--Chiedere con un prompt age passeggero  (e definire variabile)
//--convertire in numeri le stringe
let age =parseInt(Number(prompt ('please enter your age')));

//-variabile km moltiplico per 0.21
let kmCalc = km * 0.21;

//defining discounts
let underDiscount = kmCalc - (kmCalc * 20 / 100 )
let overDiscount = kmCalc - (kmCalc * 40 / 100 )
//IF
//età inferiore a 18 anni --//stampo variabile km -20%
if (age < 18) {
    console.log(`
    You are qualified for our 20% discount! the total amount for your ticket is now:
    € ${underDiscount} instead of € ${kmCalc}
    `)
    document .getElementById('ticket-price').innerHTML =`You are qualified for our 20% discount! the total amount for your ticket is now:
    €${underDiscount} instead of € ${kmCalc}`;
//ELSE IF
//età superiore a 65 anni--//stampo variabile km -40%
}else if (age > 65) {
    console.log(`
    You are qualified for our 40% discount! the total amount for your ticket is now:
     € ${overDiscount} instead of € ${kmCalc}
     `)
     document .getElementById('ticket-price').innerHTML =`You are qualified for our 20% discount! the total amount for your ticket is now:
    €${overDiscount} instead of € ${kmCalc}`;
//ELSE
//stampo variabile km
}else {
    console.log(`The total amount for your ticket is € ${kmCalc}
    `)
    document .getElementById('ticket-price').innerHTML =`The total amount for your ticket is € ${kmCalc}`;
}




