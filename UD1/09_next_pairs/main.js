
function nextPairs(value)
{
    let nextEven = 0;
    let previousEven = 0;
    
    // Next Even Loop
    for (let index = value; nextEven === 0; index++)
    {
        value !== index && index % 2 === 0 ? nextEven = index : false ;
    }

    // Previous Even Loop
    for (let index = value; previousEven === 0; index--)
    {
        value !== index && index % 2 === 0 ? previousEven = index : false ;
    }

    return [previousEven, nextEven];
}

console.log(nextPairs(3));
console.log(nextPairs(4));

