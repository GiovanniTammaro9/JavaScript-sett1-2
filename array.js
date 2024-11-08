const myArray = [1, 2, 3, 4, 5];
console.log(myArray);
//somma dei valori nell'array
let somma = 0;

for (let i = 0; i < myArray.length; i++){
    somma += myArray[i];
}
console.log("la somma degli elementi dell'array è" + somma);