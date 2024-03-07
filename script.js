const gridContainer = document.querySelector(".grid-container")
const btnStart = document.querySelector(".btn-start");

// Array per le bombe
let bombNumbers = [];

// Conteggio punti
let counterPoint = 0;

// Funzione per generare 16 numeri unici casuali come posizioni delle bombe
function generateBombNumbers() {
  
  bombNumbers = [];
  while(bombNumbers.length < 16) {

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    if (!bombNumbers.includes(randomNumber)) {
      bombNumbers.push(randomNumber);
    }
  }
}

///Bottone start
btnStart.addEventListener("click", inizio)

///////////////////////////////////////////////
///////////////Ciclo 100 Elementi//////////////
///////////////////////////////////////////////

function inizio(){
  reset()
  // Genera le bombe all'inizio di ogni gioco
  generateBombNumbers();
  // Resetta il contatore di punteggio
  counterPoint = 0; 
  for(let i = 1; i <= 100; i++){

  const square = inserisciRiquadro(i)

  gridContainer.append(square)
 }
}

// Aggiungi una variabile di stato per tenere traccia se il gioco è finito
let gameOver = false;

// Definizione della funzione inserisciRiquadro che crea un quadrato (div) con un numero associato

function inserisciRiquadro(numero){
  const sq = document.createElement("div");
  sq.className = "square";
  
  /////////////////////////////
  //////Funzione///Click///////
  /////////////////////////////
  
  sq.addEventListener("click", function(){
    if (gameOver) {
      return;
    }
    // Controlla se il quadrato cliccato è una bomba
    if (bombNumbers.includes(numero)) {
      // Imposta lo stato di gioco su finito
      gameOver = true;
      // Colora il quadrato di rosso se è una bomba
      sq.style.backgroundColor = "red"; 
      alert(`Hai trovato una bomba! Hai fatto: ${counterPoint}`);
      console.log(`Punteggio finale: ${counterPoint}`);
      // Mostra tutte le bombe
      showAllBombs(); 
      
    } else {
      // Altrimenti, segna il quadrato come cliccato
      sq.classList.add("clicked");
      counterPoint++;
      console.log(`Punteggio attuale: ${counterPoint}`);
    }
    console.log(numero);
  });

   // Restituisce l'elemento 'sq' così che possa essere aggiunto al codice
   return sq
  
    function showAllBombs() {
    // Utilizza un ciclo for
    if (!gameOver) {
      return;
    }
    for (let i = 0; i < bombNumbers.length; i++) {
      const bombNumber = bombNumbers[i];
      
      const bombSquare = gridContainer.children[bombNumber - 1];
      if (bombSquare && !bombSquare.classList.contains("clicked")) {
        bombSquare.style.backgroundColor = "red";
        // Aggiungi una classe per identificare visivamente le bombe
        bombSquare.classList.add("bomb"); 
      }
    }
  }

}

///////////////////////
/////////RESET/////////
///////////////////////

function reset(){

  console.log("Reset del gioco")
  gridContainer.innerHTML = ""; 
}
