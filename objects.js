let person = {
    name: "Giovanni",
    age: "29",
    city: "napoli"
};
console.log(person);
console.log(person.age);

person.age = "30";
console.log(person.age);
person.job = "programmatore";
console.log(person);

for (let proprieta in person) {
    let valore = person[proprieta];
    console.log(proprieta + valore);
}