function evenNumbers()
{
    let array = [,];
    for (let index = 0; index < 100; index++)
    {
        index !== 0 && index % 2 === 0 ? array.push(index) : false ;
    }
    return array;
}

console.log(evenNumbers());
// expected output 2,4,6,8,10......98
