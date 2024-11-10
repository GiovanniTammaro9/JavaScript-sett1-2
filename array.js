const myArray = [1, 2, 3, 4, 5];
console.log(myArray);
//somma dei valori nell'array
let somma = 0;

for (let i = 0; i < myArray.length; i++){
    somma += myArray[i];
}
console.log("la somma degli elementi dell'array è" + somma);

//reverse array

for (let i = myArray.length - 1; i >= 0; i--){
    console.log(myArray[i]);
}

//popolamento array
let parole = [];

for (let i = 0; i < 5; i++){
   // let parola = prompt("inserisci una parola:")
    parole.push(parola);

}

for(let i = 0; i < parole.length; i++){
    let parola = parole[i];
    if(parola.length % 2 !== 0){
        console.log(parola);
    }
}