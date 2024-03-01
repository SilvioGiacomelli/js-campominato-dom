Campo Minato
===
**Consegna**
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
===
**Possibile flusso**
1. Unisco tutti i codici script e css sul foglio html
2. Creare una funzione che genera 16 numeri casuali compresi nel numero massimo delle celle di gioco (100) senza creare ripetizioni.
3. Modificare il ciclo preesistente con l'aggiunta dell'opzione della pressione della bomba "uno dei 16 numeri" che triggera un allert e colora il quadrato di rosso
4. Inserire un contatore di pressione celle, così da comunicare un punteggio al giocatore "inserendo un contatore"
5. Allert finale che comunica il punteggio del giocatore