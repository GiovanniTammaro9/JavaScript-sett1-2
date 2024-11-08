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