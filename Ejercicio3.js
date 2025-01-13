//----------------------------------------------------------------------------------------------------------------------------------------------------

//Actividad JS

//3
let numeros1 = [1, 2, 3, 4, 5]
let numeros2 = [1, 2, 3, 3, 5]
const tieneDuplicados = (array) => {
    const set = new Set(array);
    return (array.length != set.size)
}
console.log(tieneDuplicados(numeros1))
console.log(tieneDuplicados(numeros2))