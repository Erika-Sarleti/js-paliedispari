/*
- chiedi all'utente di inserire una parola
-Crea una funzione per capire se quella parola è palindroma
    - prendi la parola
    -la "spezzetti" in lettere (valori)
    - confronti il primo valore con l'ultimo (parola.lenght - i), se è uguale vai avanti
    vai avanti fino a quando non trovi lettere diverse, se non ce ne sono la parola è palindroma

*/

const userInput = document.getElementById('userinput');
// let btn = document.getElementById('btn');

function palindromo(userInput){
    let i = 0;
    let switcho = true; /* La parola è palindroma*/    
    while (i < (userInput.lenght / 2) && switcho == true){         
      if (userInput[i] != userInput[userInput.lenght - i - 1]){
        switcho = false;
      }
      i++;
    } 
    return switcho;
}
btn.addEventListener('click', function(){
    if (palindromo(userInput.value)) {
    alert("Questa parola è palindroma");
    } else {
        alert("Questa parola non è palindroma");
    }
})