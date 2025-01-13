//----------------------------------------------------------------------------------------------------------------------------------------------------

//Actividad JS

//6
let numeros1 = [1, 2, 3]
let numeros2 = [3, 2, 1]
let numeros3 = [4, 5, 6]
const sonIguales = (array1, array2) => {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    const set = set1.difference(set2);
    return (set.size == 0)
}
console.log(sonIguales(numeros1, numeros2));
console.log(sonIguales(numeros1, numeros3));