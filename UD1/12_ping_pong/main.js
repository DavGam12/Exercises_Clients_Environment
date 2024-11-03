function pingPong()
{
    for (let index = 1; index <= 100; index++)
    {
        index % 10 === 0 ? console.log('PONG') : false ;
        index % 10 !== 0 && index % 5 === 0 ? console.log('PING') : false ;
        index % 5 !== 0 ? console.log(index) : false ;
    }
}

pingPong()
