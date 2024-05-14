Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana - con massimo due decimali, per indicare centesimi sul prezzo.
Questo richiederà un minimo di ricerca.
Il risultato andrà visualizzato in un apposito elemento <p> del  codice HTML.


--Chiedere con un prompt km da percorrere (e definire variabile)
--Chiedere con un prompt age passeggero  (e definire variabile)

--convertire in numeri le stringe

-variabile km moltiplico per 0.21

IF
età inferiore a 18 anni
stampo variabile km -20%
ELSE IF
età superiore a 65 anni
stampo variabile km -40%
ELSE
stampo variabile km

