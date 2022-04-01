// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando 
// ne avrà tanti quanti l’altro.

let LongArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ShortArray = [1, 2, 3, 4];

console.log(LongArray);
console.log(ShortArray);

for ( let i = ShortArray.length; ShortArray.length < LongArray.length; i++ ){

    ShortArray.push(Math.floor((Math.random()*10)));

}

console.log(ShortArray);