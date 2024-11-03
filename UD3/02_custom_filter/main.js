
function select(array, condition)
{
    let sol = [,];
    switch (condition) {
        case 'pairs':
            sol = array.filter(el => el % 2 === 0);
            break;
        case 'gt15':
            sol = array.filter(el => el > 15);
            break;
        case 'lt10':
            sol = array.filter(el => el < 10);
            break;
        default:
            console.log('Not a condition');
            break;
    }
    return sol;
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]

// sólo pares
console.log(select(values, 'pairs'));

// mayores que 15
console.log(select(values, 'gt15'));

// menores de 10
console.log(select(values, 'lt10'));
