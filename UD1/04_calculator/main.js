// Declarar 2 variables con número e imprimir por consola (mediante console.log()) el valor de:
// Suma
// Resta
// Multiplicación
// División


// define variables
let x = 4;
let y = 4


// print sum, substract, multiply and divide


const Calculator = (x, y) =>
{
    console.log(`Suma: ${x} + ${y} = ${x+y}`);
    console.log(`Resta: ${x} - ${y} = ${x-y}`);
    console.log(`Multiplicación: ${x} * ${y} = ${x*y}`);
    console.log(`División: ${x} / ${y} = ${x/y}`);
    
}

Calculator(x,y);

