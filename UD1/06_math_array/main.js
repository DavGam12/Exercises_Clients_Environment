// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos



function doCalculation(array)
{
    let sum = 0;
    let max = 0;
    let min = 0;
    let avg = 0;
    array.forEach((el, index) =>
    {
        sum += el;
        index === 0 ? max = el : el > max ? max = el : false ;
        index === 0 ? min = el : el < min ? min = el : false ;
    })
    avg = sum / array.length;

    console.log(`Sum = ${sum}`);
    console.log(`Max = ${max}`);
    console.log(`Min = ${min}`);
    console.log(`Avg = ${avg}`);
    
}


doCalculation([1,2,3,4])
doCalculation([5,5,5,5])
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])