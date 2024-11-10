let number = 10;

if (number > 5) {
    console.log("la variabile è maggiore di 5");
} else {
    console.log("la variabile è minore di 5");
}

//if ed else if

//let score = parseInt(prompt("inserisci il numero"));
if (score >= 90 && score <= 100) {
    console.log("voto ottimo ");
} else if (score >= 70 && score <= 89) {
    console.log("voto buono");
} else if (score >= 60 && score >= 69) {
    console.log("voto sufficente");
} else if (score <= 59) {
    console.log("voto insufficente");
} else {
    console.log("punteggio non valido");
}

//switch case 
switch (true) {
    case (score >= 90 && score <= 100):
        console.log("il voto è ottimo");
        break;
    case (score >= 70 && score <= 89):
        console.log("voto buono");
        break;
    case (score >= 60 && score <= 69):
        console.log("voto sufficente");
        break;
    case (score >= 59):
        console.log("voto insufficente");
        break;
}