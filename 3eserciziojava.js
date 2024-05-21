/* Traccia 1 
Traccia 1: Utilizzare il ciclo for per stampare tutti i nomi della lista; */

let listaNomi = ["Franco", "Gennaro", "Valerio", "Giulia", "Eugenio", "Paolo", "Giuseppina"]

for (let index = 0; index < listaNomi.length; index++) {
    console.log("Le persone in lista sono:" + listaNomi[index]);

}


/* Traccia 2 
Traccia 2: Utilizzare il ciclo for annidato ad un altro ciclo for per stampare i nomi, carattere per carattere. Il risultato della stampa deve essere lo stesso dell'esercizio precedente;*/

let lista = ["Franco", "Gennaro", "Valerio", "Giulia", "Eugenio", "Paolo", "Giuseppina"]

for (let i = 0; i < lista.length; i++) {
    let lunghezzaParolaCorrente = lista[i].length; //Qui è contenuta la lunghezza della parola    
    console.log("Faccio lo spelling della parola " + lista[i]);

    for (let k = 0; k < lunghezzaParolaCorrente; k++) {
        console.log(lista[i].charAt(k));
    }

    if (i == lista.length - 1) {
        console.log("---------------------------------------------------------");
    }
}


/* Traccia 3 
Ricreare uno sportello automatico che faccia fare prelievi, bonifici e che mantenga traccia del conto dopo le operazioni. Si deve comportare in maniera perpetua finché l'utente non decide di chiudere l'operazione. Usare il ciclo while.*/

let contoCorrente = 5000;
let operazioni;

while (operazioni != 3) {

    operazioni = parseInt(prompt("Benvenuto in Banca Bella.\n Premi 1 per fare bonifico.\n Premi 2 per fare un prelievo.\n Premi 3 per chiudere."));

    switch (operazioni) {

        case 1:
            let bonifico = parseInt(prompt("Inserisca la cifra per il bonifico:"));
            if (bonifico <= contoCorrente) {
                alert("Il bonifico è andato a buon fine. Il suo saldo disponibile è: " + (contoCorrente - bonifico) + "€");
                break;
            } else {
                alert("Saldo insufficiente per effettuare l'operazione.");
                break;
            }

        case 2:
            let prelievo = parseInt(prompt("Inserisca la quantità di denaro che vuole prelevare:"));
            if (prelievo <= contoCorrente) {
                alert("Il prelievo è andato a buon fine. Il suo saldo attuale è: " + (contoCorrente - prelievo) +"€");
                break;
            } else {
                alert("Saldo insufficiente per effettuare l'operazione.");
                break;
            }

        case 3:
            alert("Arrivederci e grazie.");
            break;

        default:
            alert("Operazione non supportata. Inserisca il comando corretto.")
            break;

    }
}



/* Traccia 4 
Fare la somma di tutti i numeri da 1 a 200 in maniera cumulativa, stampare poi il risultato finale.*/

let somma = 0
for (let numeri = 1; numeri <= 200; numeri++) {

    somma = somma + numeri
}

console.log("La somma cumulativa dei numeri da 1 a 200 è: " + somma);



/* Traccia 5 
Stampare tutti i numeri divisibili per 20 nell'intervallo tra 1 e 400.*/

for (let numero = 1; numero <= 400; numero++) {
    if (numero % 20 == 0) {
        console.log(numero);
    }
} 