Sull'applicazione angular c'è un problema: se, nella sezione di ricerca, aumenti o diminuisci il numero di elementi per pagina che vuoi visualizzare, ad ogni click parte una chiamata. Da evitare perché vulnerabile a sovraccarico sul server.
CONSIGLIO: Debounce

SU ANGULAR non funziona il filtro: Certificazioni. Non possiamo sapere come chiamare il backend, vuole ID o Nome?

---

### Roba da dire per BE:

Se il token non è valido da 500 come errore. Non è possibile definire se quell'errore è un errore nostro o di generico di BE. Potrebbe essere che un errore sia presente a prescindere dal token, noi in questo modo non abbiamo evidenza del fatto che possa essere un errore di token o di BE.

Se vai da FE in una pagina di dettaglio user e quello user non esiste sul BE non ti da errore ma una pagina vuota, response.data da una "" e 200 come http code.
L'ideale sarebbe un errore esplicativo così da poterlo gestire anche a FE.

---
