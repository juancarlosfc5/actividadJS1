//----------------------------------------------------------------------------------------------------------------------------------------------------

//Actividad JS

//2
const numerosDuplicados = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 10];
const numeros = new Set(numerosDuplicados);
const arrayNumeros = Array.from(numeros);
console.log(arrayNumeros);