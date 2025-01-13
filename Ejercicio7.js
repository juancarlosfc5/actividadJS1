//----------------------------------------------------------------------------------------------------------------------------------------------------

//Actividad JS

//7
const texto = "Hola mundo mundo de JavaScript";
const contarPalabrasUnicas = (frase) => {
    palabra = frase.split(" ");
    set = new Set(palabra);
    console.log(set.size);
}
console.log(contarPalabrasUnicas(texto));