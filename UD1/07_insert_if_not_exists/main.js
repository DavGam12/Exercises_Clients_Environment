
function insertIfNotExists(array, item, position) {
    let exist = false;
    array.forEach(el =>
    {
        if (!exist)
        {
            item === el ? exist = true : exist = false ;
        }
    })
    if (!exist)
    {
        position ? array.push(item) : array.unshift(item) ;
    }

    return array
}


let array = ['pera', 'manzana']

let resultMeow = insertIfNotExists(array, 'meow', true)
let resultWoof = insertIfNotExists(array, 'woof', false)
let resultPera = insertIfNotExists(array, 'pera', true)
console.log(array);

